import React, { useImperativeHandle, useState } from "react";
import { clsx } from "clsx";
import { useControllableValue } from "ahooks";
import "./index.css";

export interface CalendarProps {
  value?: Date;
  defaultValue?: Date;
  onChange?: (value: Date) => void;
}

export interface CalendarRef {
  getDate: () => Date;
  setDate: (date: Date) => void;
}

const InternalCalendar: React.ForwardRefRenderFunction<
  CalendarRef,
  CalendarProps
> = (props, ref) => {
  const { defaultValue, value, onChange } = props;
  const [date, setDate] = useControllableValue(props, {
    defaultValue: new Date(),
  });

  useImperativeHandle(ref, () => {
    return {
      getDate: () => date,
      setDate: (date) => setDate(date),
    };
  });

  function getFirstDayOfMonth(year: number, month: number) {
    return new Date(year, month, 1).getDay();
  }

  function getDaysOfMonth(year: number, month: number) {
    return new Date(year, month + 1, 0).getDate();
  }

  const onChangeDate = (e: React.MouseEvent) => {
    const selectedDay = +(e.currentTarget.getAttribute("data-select-day") || 0);
    const curDate = new Date(date.getFullYear(), date.getMonth(), selectedDay);
    setDate(curDate);
  };

  function renderDays() {
    const firstDayOfMonth = getFirstDayOfMonth(
      date.getFullYear(),
      date.getMonth()
    );
    const daysCount = getDaysOfMonth(date.getFullYear(), date.getMonth());
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<span key={`empty-${i}`} className="empty"></span>);
    }

    for (let i = 1; i < daysCount; i++) {
      days.push(
        <span
          key={`day-${i}`}
          className={clsx("day", {
            selected: date.getDate() === i,
          })}
          data-select-day={i}
          onClick={onChangeDate}
        >
          {i}
        </span>
      );
    }

    return days;
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button
          onClick={() =>
            setDate(new Date(date.getFullYear(), date.getMonth() - 1, 1))
          }
        >
          &lt;
        </button>
        <span className="">{`${date.getFullYear()}年${
          date.getMonth() + 1
        }月`}</span>
        <button
          onClick={() =>
            setDate(new Date(date.getFullYear(), date.getMonth() + 1, 1))
          }
        >
          &gt;
        </button>
      </div>
      <div className="calendar-days">
        <span className="day">日</span>
        <span className="day">一</span>
        <span className="day">二</span>
        <span className="day">三</span>
        <span className="day">四</span>
        <span className="day">五</span>
        <span className="day">六</span>
        {renderDays()}
      </div>
    </div>
  );
};

const Calendar = React.forwardRef(InternalCalendar);

export default Calendar;
