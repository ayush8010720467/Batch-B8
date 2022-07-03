import "./Button.css";
function Button(props) {
  return (
    <button
      className={props.className}
      onClick={props.handleClick ? props.handleClick : () => {}}
    >
      {props.text}
    </button>
  );
}
export default Button;
