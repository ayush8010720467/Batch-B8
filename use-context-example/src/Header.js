import Button from "./Button/Button";
import { GlobalContext } from "./App";
import { useContext } from 'react';
function Header(props) {
    const { showSetting, setShowSetting } = useContext(GlobalContext);
  return (
    <>
      <div className="App-header">
        <Button
          stylingClasses={
            showSetting
              ? "btn btn-primary top-right m-30 f-b"
              : "btn-sec btn top-right m-30 f-b"
          }
          handleClick={() => {
            setShowSetting(!showSetting);
          }}
        >
          Setting
        </Button>
      </div>
    </>
  );
}
export default Header;
