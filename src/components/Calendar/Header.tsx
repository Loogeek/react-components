import type { Dayjs } from "dayjs";
import { useContext } from "react";
import LocaleContext from "./localeContext";
import allLocals from "./locale";

const preCls = "calendar-header";

interface HeaderProps {
  curMonth: Dayjs;
  onChangePreMonth: () => void;
  onChangeNextMonth: () => void;
  onToday: () => void;
}

function Header(props: HeaderProps) {
  const { curMonth, onChangePreMonth, onChangeNextMonth, onToday } = props;
  const localContext = useContext(LocaleContext);
  const CalendarContext = allLocals[localContext.locale];

  return (
    <div className={`${preCls}`}>
      <div className={`${preCls}-left`}>
        <div className={`${preCls}-icon`} onClick={onChangePreMonth}>
          &lt;
        </div>
        <div className={`${preCls}-value`}>
          {curMonth.format(CalendarContext.formatMonth)}
        </div>
        <div className={`${preCls}-icon`} onClick={onChangeNextMonth}>
          &gt;
        </div>
        <button className={`${preCls}-btn`} onClick={onToday}>
          {CalendarContext.today}
        </button>
      </div>
    </div>
  );
}

export default Header;
