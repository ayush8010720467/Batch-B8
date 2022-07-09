import { useState } from "react";
import "./Stopwatch.css";
import GenericSpan from "./Components/GenericSpan";
import { Start, Stop, Pause, Resume, Timer } from "./constants";

function Stopwatch() {
  const [stopWatchState, setStopWatchState] = useState(0);
  const [secPassed, setSecPassed] = useState(0);
  const [timerId, setTimerId] = useState(null);
  const startTimer = (_) => {
    let tId = setInterval(() => {
      setSecPassed((sec) => sec + 1);
    }, 1000);
    setTimerId(tId);
  };
  const stopTimer = () => {
    clearInterval(timerId);
    setSecPassed(0);
  };
  const pauseTimer = () => {
    clearInterval(timerId);
  };
  const resumeTimer = (_) => {
    startTimer();
  };
  const get2digValue = (num) => (num < 10 ? "0" + num : "" + num);

  const getFormatedTime = (secCount) => {
    let res = "";
    let sec = secCount % 60;
    secCount = parseInt(secCount / 60);
    let min = secCount % 60;
    secCount = parseInt(secCount / 60);
    let hour = secCount % 24;
    res =
      get2digValue(hour) +
      " : " +
      get2digValue(min) +
      " : " +
      get2digValue(sec);
    return res;
  };
  return (
    <>
      <div className="container">
        {stopWatchState === 0 && (
          <GenericSpan
            type={Start.type}
            text={Start.text}
            className={Start.className}
            handleClick={() => {
              startTimer();
              setStopWatchState(1);
            }}
          />
        )}
        {stopWatchState === 1 && (
          <>
            <GenericSpan
              type={Stop.type}
              text={Stop.text}
              className={Stop.className}
              handleClick={() => {
                stopTimer();
                setStopWatchState(0);
              }}
            />
            <GenericSpan
              type={Timer.type}
              className={Timer.className}
              text={getFormatedTime(secPassed)}
            />
            <GenericSpan
              type={Pause.type}
              text={Pause.text}
              className={Pause.className}
              handleClick={() => {
                pauseTimer();
                setStopWatchState(2);
              }}
            />
          </>
        )}
        {stopWatchState === 2 && (
          <>
            <GenericSpan
              type={Stop.type}
              text={Stop.text}
              className={Stop.className}
              handleClick={() => {
                stopTimer();
                setStopWatchState(0);
              }}
            />
            <GenericSpan
              type={Timer.type}
              text={getFormatedTime(secPassed)}
              className={Timer.className}
            />
            <GenericSpan
              type={Resume.type}
              text={Resume.text}
              className={Resume.className}
              handleClick={() => {
                resumeTimer();
                setStopWatchState(1);
              }}
            />
          </>
        )}
      </div>
    </>
  );
}
export default Stopwatch;
