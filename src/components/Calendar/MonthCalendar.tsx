import type { Dayjs } from "dayjs";
import clsx from "clsx";
import type { CalendarProps } from ".";
import { useContext } from "react";
import LocaleContext from "./localeContext";
import allLocals from "./locale";

const preCls = "calendar-month";
export interface MonthCalendarProps extends CalendarProps {
  curMonth: Dayjs;
  onSelectDate?: (date: Dayjs) => void;
}

function getAllDays(date: Dayjs) {
  const startDate = date.startOf("month");
  const day = startDate.day();
  const daysInfo: Array<{ date: Dayjs; currentMonth: boolean }> = new Array(
    6 * 7
  );

  for (let i = 0; i < day; i++) {
    daysInfo[i] = {
      date: startDate.subtract(day - i, "day"),
      currentMonth: false,
    };
  }

  for (let i = day; i < daysInfo.length; i++) {
    const calcDate = startDate.add(i - day, "day");
    daysInfo[i] = {
      date: startDate.add(i - day, "day"),
      currentMonth: calcDate.month() === date.month(),
    };
  }

  return daysInfo;
}

function MonthCalendar(props: MonthCalendarProps) {
  const { dateInnerContent, dateRender, value, curMonth, onSelectDate } = props;
  const localeContext = useContext(LocaleContext);
  const weekList = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const allDays = getAllDays(curMonth);
  const CalendarLocale = allLocals[localeContext.locale];

  function renderDays(days: Array<{ date: Dayjs; currentMonth: boolean }>) {
    const rows = [];

    for (let i = 0; i < 6; i++) {
      const row = [];
      for (let j = 0; j < 7; j++) {
        const item = days[i * 7 + j];
        row[j] = (
          <div
            className={clsx(`${preCls}-body-cell`, {
              [`${preCls}-body-cell-current`]: item.currentMonth,
            })}
            onClick={() => onSelectDate?.(item.date)}
          >
            {dateRender ? (
              dateRender(item.date)
            ) : (
              <div className={`${preCls}-body-cell-date`}>
                <div
                  className={clsx(`${preCls}-cell-body-date-value`, {
                    [`${preCls}-body-cell-date-selected`]:
                      value.format("YYYY-MM-DD") ===
                      item.date.format("YYYY-MM-DD"),
                  })}
                >
                  {item.date.date()}
                </div>
                <div className={`${preCls}-cell-body-date-content`}>
                  {dateInnerContent?.(item.date)}
                </div>
              </div>
            )}
          </div>
        );
      }
      rows.push(row);
    }

    return rows.map((row) => <div className={`${preCls}-body-row`}>{row}</div>);
  }

  return (
    <div className={preCls}>
      <div className={`${preCls}-week-list`}>
        {weekList.map((week) => (
          <div className={`${preCls}-week-list-item`} key={week}>
            {CalendarLocale.week[week]}
          </div>
        ))}
      </div>
      <div className={`${preCls}-month-body`}>{renderDays(allDays)}</div>
    </div>
  );
}

export default MonthCalendar;
