import Footer from "./Footer/Footer";
import "./Clock.css";
function Clock() {
  return (
    <>
      <div className="clockContainer">
        <div className="displayArea"></div>
        <Footer />
      </div>
    </>
  );
}
export default Clock;
