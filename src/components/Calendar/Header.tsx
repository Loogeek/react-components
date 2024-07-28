const preCls = "calendar-header";

function Header() {
  return (
    <div className={`${preCls}`}>
      <div className={`${preCls}-left`}>
        <div className={`${preCls}-icon`}>&lt;</div>
        <div className={`${preCls}-value`}>2024 年 7 月</div>
        <div className={`${preCls}-icon`}>&gt;</div>
        <button className={`${preCls}-btn`}>今天</button>
      </div>
    </div>
  );
}

export default Header;
