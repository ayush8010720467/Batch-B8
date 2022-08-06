import './Button.css'
function Button(props){
    return <button className={props.stylingClasses} onClick={props.handleClick}>{props.text? props.text: props.children}</button>;
}
export default Button;