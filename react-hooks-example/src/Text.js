import { useEffect } from 'react';
function Text({text}){
    useEffect(()=>{
        console.log("Text component mounted");
        return ()=>{
            console.log("Text component unmounted");
        }
    }, []);
    return <span>{text}</span>
}
export default Text;