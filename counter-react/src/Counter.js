import Button from "./Button";
import "./Counter.css";
import { useState } from "react";
function Counter(props) {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <div className="counter">
      <div>
        <Button
          name={"-"}
          handleClick={() => {
            setCounterValue((counter) => counter - 1);
          }}
        ></Button>
        <span>{counterValue}</span>
        <Button
          name={"+"}
          handleClick={() => {
            setCounterValue((counter) => counter + 1);
          }}
        ></Button>
      </div>
      <Button
        name={"Reset"}
        handleClick={() => {
          setCounterValue(0);
        }}
      ></Button>
    </div>
  );
}
export default Counter;
