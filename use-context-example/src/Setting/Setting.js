import "./Setting.css";
import { useRef } from 'react'
import Button from "../Button/Button";
import { GlobalContext } from "../App";

function Setting(props){
    const bgColorInput = useRef(null);
    return (
      <GlobalContext.Consumer>
      { (context) => {
        const onSave = ()=>{
            context.setBgColor(bgColorInput.current.value);
        }
          return (
            <div className="setting-page">
              <div className="input-body">
                <span className="lable">Select the Bg Color</span>
                <input type="color" ref={bgColorInput} />
              </div>
              <div className="setting-page-footer">
                <Button
                  stylingClasses={"btn btn-save m-r-30 f-m"}
                  handleClick={onSave}
                >
                  Save
                </Button>
                <Button
                  stylingClasses={"btn btn-close m-r-30 f-m"}
                  handleClick={() => {}}
                >
                  Close
                </Button>
              </div>
            </div>
          );
      }}
      </GlobalContext.Consumer>
    );
}
export default Setting;