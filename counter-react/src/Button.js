import "./Button.css";
function Button(props) {
  return (
    <>
      <button
        onClick={props.handleClick}
        className={props.className ? props.className : "btn"}
      >
        {props.name}
      </button>
    </>
  );
}
export default Button;
