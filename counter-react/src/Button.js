import './Button.css'
function Button(props){
    return <>
    <button onClick={props.handleClick} className='btn'>{props.name}</button>
    </>
}
export default Button;