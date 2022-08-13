import "./ContactUs.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ContactUs(props) {
    let params = useParams();
    const [error, setError] = useState(null);
    useEffect(()=>{
        if(params.phone.length !== 10){
            setError("invalid Phone");
        }
    },[])
  return (
    <>
      <h1>Contact Us</h1>
      {error ? <h2>{error}</h2> :<p>Lorem sdfljkasdjfklajsdlkfjiawe csdkjfaclksdf cadsjfkasj</p>}
      
    </>
  );
}
export default ContactUs;
