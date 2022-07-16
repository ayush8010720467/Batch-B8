import React from "react";
class StyledButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: {
        backgroundColor: "red",
        color: "white",
        border: 0,
        width: "200px",
        margin: "20px",
        fontSize: "50px",
      },
      toggle: 0,
    };
  }
  changeColor = () => {
    if (this.state.styling.backgroundColor === "red") {
      this.setState({
        styling: { ...this.state.styling, backgroundColor: "green" },
      });
    } else {
      this.setState({
        styling: { ...this.state.styling, backgroundColor: "red" },
      });
    }
  };
  render() {
    return (
      <button style={this.state.styling} onClick={this.changeColor}>
        {this.props.text}
      </button>
    );
  }
}
export default StyledButton;
