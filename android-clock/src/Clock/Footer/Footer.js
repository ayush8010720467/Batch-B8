import "./Footer.css";
import Button from "../Shared/Component/Button/Button";
function Footer(props) {
  return (
    <div className="footer">
      <Button
        text={"Alarm"}
        className={props.selected === 0 ? "clock btn btnSelect" : "clock btn"}
        handleClick={() => props.changeSelectedScreen(0)}
      ></Button>
      <Button
        text={"Stopwatch"}
        className={props.selected === 1 ? "clock btn btnSelect" : "clock btn"}
        handleClick={() => props.changeSelectedScreen(1)}
      ></Button>
      <Button
        text={"Countdown"}
        className={props.selected === 2 ? "clock btn btnSelect" : "clock btn"}
        handleClick={() => props.changeSelectedScreen(2)}
      ></Button>
      <Button
        text={"Clock"}
        className={props.selected === 3 ? "clock btn btnSelect" : "clock btn"}
        handleClick={() => props.changeSelectedScreen(3)}
      ></Button>
    </div>
  );
}
export default Footer;
