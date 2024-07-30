import { useEffect, useRef } from "react";
import dayjs from "dayjs";

// import Calendar, { CalendarRef } from "./components/Calendar/mini";
import Calendar from "./components/Calendar";
import IconAdd from "./components/Icon/icons/IconAdd";
import IconEmail from "./components/Icon/icons/IconEmail";
import { createFrontIconfont } from "./components/Icon/createFrontIconfont";

const IconFont = createFrontIconfont(
  "//at.alicdn.com/t/c/font_4637498_77q1sghns3b.js"
);

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
      {/* <div>
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
      </div> */}
      <div style={{ marginTop: "30px" }}>
        <IconAdd size="40px" />
        <IconEmail spin />
        <IconEmail style={{ color: "blue", fontSize: "50px" }}></IconEmail>
        <IconFont type="icon-dikuai" />
        <IconFont type="icon-dangan" />
      </div>
    </>
  );
}

export default App;
