import logo from './logo.svg';
import './App.css';
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useLayoutEffect,
  useContext,
} from "react";
import Text from './Text';
import InputElem from './InputElem';
import ApiCall from './ApiCall';

const themes = {
  dark: { "background-color": "#282c34", color: "white" },
  light: { "background-color": "white", color: "#282c34" },
  xyz: { "background-color": "#000", color: "orange" },
};

const themeContext = React.createContext(themes.light);

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  // var x;
  useEffect( ()=>{console.log("use Effect", count % 2 === 0);});
  useLayoutEffect(() => {
    console.log("useLayoutEffect", count % 2 === 0);
  });
  useEffect(() => console.log("count 1", count1), [count1, count]);
  useEffect(()=>{console.log("Component Mounted use Effect");}, []);
  useLayoutEffect(() => {
    console.log("Component Mounted useLayoutEffect");
  }, []);
  const incrCount = useCallback( () => {
            if (count % 2 === 0) {
              setCount1((c)=>c+1);
            }
            setCount((count) => count + 1);
          }, []);

  const getCount = useCallback(() => {
    console.log("getCount called");
    return count;
  }, [count]);

  const getCount1 = useMemo(() => {
    console.log("getCount1 called");
    return count1;
  }, []);
  
    return (
      <themeContext.Provider value={themes.xyz}>
        <TestComponent
          getCount1={getCount1}
          getCount={getCount}
          incrCount={incrCount}
          count={count}
          count1={count1}
          inputValue={inputValue}
          setInputValue={setInputValue}
        ></TestComponent>
        <ApiCall user={'ayush8010720467'}></ApiCall>
      </themeContext.Provider>
    );
}

export default App;

function TestComponent(props){
  const theme = useContext(themeContext);
  return (
        <div className="App">
          <header
            className="App-header"
            style={{
              backgroundColor: theme["background-color"],
              color: theme.color,
            }}
          >
            <div onClick={props.incrCount}>
              {props.getCount()}
              {props.count % 2 === 0 && <Text text={"Hello even Number"} />}
              <br />
              <br />
              {props.getCount1}
            </div>
            <InputElem init={props.inputValue} onChange={props.setInputValue} />
            Value from the input {props.inputValue}
          </header>
        </div>);
      
}
