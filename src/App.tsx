import { useEffect, useRef } from "react";

import Calendar, { CalendarRef } from "./components/Calendar";
function App() {
  const calendarRef = useRef<CalendarRef>(null);

  useEffect(() => {
    console.log(calendarRef.current?.getDate());
    // setTimeout(() => {
    //   calendarRef.current?.setDate(new Date(2024, 8, 1));
    // }, 3000);
  }, []);

  return (
    <>
      <Calendar
        defaultValue={new Date()}
        ref={calendarRef}
        onChange={(date: Date) => {
          alert(date.toLocaleDateString());
        }}
      />
    </>
  );
}

export default App;
