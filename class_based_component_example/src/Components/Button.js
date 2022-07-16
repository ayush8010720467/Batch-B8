import React from "react";
import "./Button.css";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button
          onClick={this.props.onClickHandler}
          className={
            this.props.className ? `btn ${this.props.className}` : "btn"
          }
        >
          {this.props.children}
        </button>
      </>
    );
  }
}
export default Button;
