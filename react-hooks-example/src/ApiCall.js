import axios from 'axios';
import { useEffect } from 'react';

function ApiCall({user}){
    const url= `https://api.github.com/users/${user}/repos`
    useEffect(()=>{
        let respPromise = axios(url);
        respPromise.then((resp)=>{
            alert("got the res"); 
            console.log(resp)
        }).catch((e)=>{
            console.log("Error",e);
        })
    }, []);
    return <></>
}
export default ApiCall;