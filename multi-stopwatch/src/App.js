import { useState } from "react";
import "./App.css";
import Stopwatch from "./Stopwatch/Stopwatch";

function App() {
  const [counter, setCounter] = useState(0);
  const getStopwatches = () => {
    return Array(counter).fill(<Stopwatch></Stopwatch>);
  };
  return (
    <>
      <div className="addStopwatches">
        <button onClick={() => setCounter((counter) => counter + 1)}>+</button>
      </div>
      <div className="stopwatch">{getStopwatches()}</div>
    </>
  );
}

export default App;
