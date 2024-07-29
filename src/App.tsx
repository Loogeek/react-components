import { useEffect, useRef } from "react";
import dayjs from "dayjs";

// import Calendar, { CalendarRef } from "./components/Calendar/mini";
import Calendar from "./components/Calendar";

function App() {
  // const calendarRef = useRef<CalendarRef>(null);

  // useEffect(() => {
  //   console.log(calendarRef.current?.getDate());
  //   // setTimeout(() => {
  //   //   calendarRef.current?.setDate(new Date(2024, 8, 1));
  //   // }, 3000);
  // }, []);

  return (
    <>
      <Calendar
        value={dayjs("2024-07-28")}
        locale="en-US"
        // dateRender={(value) => {
        //   return (
        //     <div>
        //       <p style={{ background: "yellowgreen", height: "50px" }}>
        //         {value.format("YYYY/MM/DD")}
        //       </p>
        //     </div>
        //   );
        // }}
        // defaultValue={new Date()}
        // ref={calendarRef}
        // onChange={(date: Date) => {
        //   alert(date.toLocaleDateString());
        // }}
      />
    </>
  );
}

export default App;
