function GenericSpan(props) {
  switch (props.type) {
    case "start":
      return (
        <span
          className="startTimer"
          onClick={
            props.handleClick
              ? props.handleClick
              : () => {
                  console.log("Nothing passed to handle");
                }
          }
        >
          {props.text}
        </span>
      );
    case "stop":
      return (
        <span
          className="stopTimer"
          onClick={props.handleClick ? props.handleClick : () => {}}
        >
          {props.text}
        </span>
      );
    case "timer":
      return (
        <span
          className="timerValue"
          onClick={props.handleClick ? props.handleClick : () => {}}
        >
          {props.text}
        </span>
      );
    case "pause":
      return (
        <span
          className="pauseTimer"
          onClick={props.handleClick ? props.handleClick : () => {}}
        >
          {props.text}
        </span>
      );
    case "resume":
      return (
        <span
          className="resumeTimer"
          onClick={props.handleClick ? props.handleClick : () => {}}
        >
          {props.text}
        </span>
      );
    default:
      return <span className={props.className}>{props.text}</span>;
  }
}
export default GenericSpan;
