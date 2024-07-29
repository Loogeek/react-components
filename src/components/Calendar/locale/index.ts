import zhCN from "./zh-CN";
import enUS from "./en-US";
import type { CalendarType } from "./interface";

const allLocals: Record<string, CalendarType> = {
  "zh-CN": zhCN,
  "en-US": enUS,
};

export default allLocals;
