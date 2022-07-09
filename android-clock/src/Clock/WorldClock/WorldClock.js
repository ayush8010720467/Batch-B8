import CircularDial from "../Shared/Component/CircularDial/CircularDial";
import "./WorldClock.css";
import { useState } from "react";
function WorldClock() {
  const [dateTime, setDateTime] = useState(new Date());
  setTimeout(() => {
    setDateTime(new Date());
  }, 1000);
  return (
    <CircularDial>
      <div className="details">
        <span className="date">
          {dateTime.toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span className="time">
          {dateTime.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </span>
      </div>
    </CircularDial>
  );
}
export default WorldClock;
