import "./Footer.css";
import Button from "../Shared/Component/Button/Button";
function Footer() {
  return (
    <div className="footer">
      <Button text={"Alarm"} className={"alarm btn"}></Button>
      <Button text={"Stopwatch"} className={"stopwatch btn"}></Button>
      <Button text={"Countdown"} className={"countdown btn"}></Button>
      <Button text={"Clock"} className={"clock btn btnSelect"}></Button>
    </div>
  );
}
export default Footer;
