import type { Dayjs } from "dayjs";
import clsx from "clsx";
import type { CalendarProps } from ".";

const preCls = "calendar-month";
export interface MonthCalendarProps extends CalendarProps {}

function getAllDays(date: Dayjs) {
  const daysInMonth = date.daysInMonth();
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
  const weekList = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];

  const allDays = getAllDays(props.value);

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
          >
            {item.date.date()}
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
            {week}
          </div>
        ))}
      </div>
      <div className={`${preCls}-month-body`}>{renderDays(allDays)}</div>
    </div>
  );
}

export default MonthCalendar;
