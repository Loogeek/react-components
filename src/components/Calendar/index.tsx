import React, { CSSProperties, ReactNode, useState } from "react";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import clsx from "clsx";
import MonthCalendar from "./MonthCalendar";
import Header from "./Header";

import "./index.scss";
import LocaleContext from "./localeContext";

export interface CalendarProps {
  value: Dayjs;
  className?: string | string[];
  style?: CSSProperties;
  // 定制日期显示，会完全覆盖日期单元格
  dateRender?: (currentDate: Dayjs) => ReactNode;
  // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效。
  dateInnerContent?: (currentDate: Dayjs) => ReactNode;
  // 国际化相关
  locale?: string;
  onChange?: (date: Dayjs) => void;
}

function Calendar(props: CalendarProps) {
  const { className, style, locale, value, onChange } = props;
  const classNames = clsx("calendar", className);

  const [curValue, setCurValue] = useState<Dayjs>(value);
  const [curMonth, setCurMonth] = useState<Dayjs>(value);

  const selectDateHandle = (date: Dayjs) => {
    changeDate(date);
  };

  function preMonthHandler() {
    setCurMonth(curMonth.subtract(1, "month"));
  }

  function nextMonthHandler() {
    setCurMonth(curMonth.add(1, "month"));
  }

  function todayHandler() {
    const date = dayjs(Date.now());

    changeDate(date);
  }

  function changeDate(date: Dayjs) {
    setCurValue(date);
    setCurMonth(date);
    onChange?.(date);
  }

  return (
    <LocaleContext.Provider value={{ locale: locale || navigator.language }}>
      <div className={classNames} style={style}>
        <Header
          curMonth={curMonth}
          onChangePreMonth={preMonthHandler}
          onChangeNextMonth={nextMonthHandler}
          onToday={todayHandler}
        />
        <MonthCalendar
          {...props}
          value={curValue}
          curMonth={curMonth}
          onSelectDate={selectDateHandle}
        />
      </div>
    </LocaleContext.Provider>
  );
}

export default Calendar;
