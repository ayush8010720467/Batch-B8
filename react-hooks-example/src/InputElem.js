import { useRef } from 'react'
function InputElem(props){
    const inputRef = useRef(null);
    const oninputChange = ()=>{
        props.onChange(inputRef.current.value);
    }
    return (
      <>
        <input type="text" ref={inputRef} onChange={oninputChange} value={props.init}/>
      </>
    );
}
export default InputElem;