import { useState } from "react";
import "./Stopwatch.css";
import GenericSpan from "./Components/GenericSpan";

function Stopwatch() {
  const [stopWatchState, setStopWatchState] = useState(0);
  return (
    <>
      <div className="container">
        {stopWatchState === 0 && (
          <GenericSpan
            type="start"
            text="Start"
            handleClick={() => {
              setStopWatchState(1);
            }}
          />
        )}
        {stopWatchState === 1 && (
          <>
            <GenericSpan
              type="stop"
              text="Stop"
              handleClick={() => {
                setStopWatchState(0);
              }}
            />
            <GenericSpan type="timer" text="00:00:00" />
            <GenericSpan
              type="pause"
              text="Pause"
              handleClick={() => {
                setStopWatchState(2);
              }}
            />
          </>
        )}
        {stopWatchState === 2 && (
          <>
            <GenericSpan
              type="stop"
              text="Stop"
              handleClick={() => {
                setStopWatchState(0);
              }}
            />
            <GenericSpan type="timer" text="00:00:00" />
            <GenericSpan
              type="resume"
              text="Resume"
              handleClick={() => {
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
