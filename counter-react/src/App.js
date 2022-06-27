import { useState } from "react";
import Button from "./Button";
import "./App.css";
import Counter from "./Counter";

function App() {
  const [counterNumbers, setCounterNumbers] = useState(0);
  const getCounters = () => {
    return Array(counterNumbers).fill(<Counter></Counter>);
  };
  return (
    <div className="App">
      <Button
        name="+"
        className={"topRightAddCounterBtn"}
        handleClick={() => {
          setCounterNumbers((counterNumbers) => counterNumbers + 1);
        }}
      ></Button>
      <header className="App-header">
        <div className="counters">{getCounters()}</div>
      </header>
    </div>
  );
}

export default App;
