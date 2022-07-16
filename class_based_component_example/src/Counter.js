import React from "react";

import "./Counter.css";
import Button from "./Components/Button";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="counter-app">
        <div>
          <Button
            onClickHandler={() => {
              this.setState({ count: this.state.count - 1 });
            }}
            className="circularBtn"
          >
            {" "}
            -{" "}
          </Button>
          <span> {this.state.count} </span>
          <Button
            onClickHandler={() => {
              this.setState({ count: this.state.count + 1 });
            }}
            className="circularBtn"
          >
            {" "}
            +{" "}
          </Button>
        </div>
        <Button
          onClickHandler={() => {
            this.setState({ count: 0 });
          }}
          className="mL16"
        >
          Reset
        </Button>
      </div>
    );
  }
}

export default Counter;
