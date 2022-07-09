import { useState } from "react";
import Footer from "./Footer/Footer";
import "./Clock.css";
import Alarm from "./Alarm/Alarm";
import Countdown from "./Countdown/Countdown";
import WorldClock from "./WorldClock/WorldClock";
import Stopwatch from "./Stopwatch/Stopwatch";
function Clock() {
  const [selected, setSelected] = useState(3);
  return (
    <>
      <div className="clockContainer">
        <div className="displayArea">
          {selected === 0 && <Alarm />}
          {selected === 1 && <Stopwatch />}
          {selected === 2 && <Countdown />}
          {selected === 3 && <WorldClock />}
        </div>
        <Footer
          selected={selected}
          changeSelectedScreen={(screen) => {
            setSelected(screen);
          }}
        />
      </div>
    </>
  );
}
export default Clock;
