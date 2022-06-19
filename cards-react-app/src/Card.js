import "./Card.css";
import star from "./star.png";
function Card(props) {
  return (
    <>
      <div className="cards">
        <img
          src={props.imageUrl}
          alt="food image"
          className="foodImage"
          height="160"
          width="250"
        />
        <div>
          <div className="heading">{props.heading}</div>
          <div className="desc">{props.desc}</div>
          <div className="cardDetails">
            <div className="rating">
              <img src={star} height="10px" width="10px"></img>
              <span>4.0</span>
            </div>
            <div>52 mins</div>
            <div> &#8377;100 for 2</div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
