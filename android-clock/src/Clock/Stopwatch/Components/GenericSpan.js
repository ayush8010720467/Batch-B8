function GenericSpan(props) {
  return (
    <span
      className={props.className}
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
}
export default GenericSpan;
