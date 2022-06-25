import "./Card.css";
import star from "./star.png";
import {useState} from 'react'
function Card(props) {
  const [index, setIndex] = useState(props.index); // returns us an array of 2 elems one being the state value and other being the function that can be used to change the state

  return (
    <>
      <div className="cards">
        <p>{index}</p>
        <button onClick={() => setIndex((index) => index + 1)}>
          increment value
        </button>
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
            {props.rating && (
              <div className="rating">
                <img src={star} height="10px" width="10px"></img>
                <span>{props.rating}</span>
              </div>
            )}
            {props.etd && <div>{props.etd}</div>}
            {props.avgPrice && <div> &#8377;{props.avgPrice}</div>}
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
