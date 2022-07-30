import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useCallback, useMemo } from "react";
import Text from './Text';


function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  // var x;
  useEffect( ()=>{console.log(count%2===0);});
  useEffect(() => console.log("count 1", count1), [count1, count]);
  useEffect(()=>{console.log("Component Mounted");}, []);
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
      <div className="App">
        <header className="App-header" onClick={incrCount}>
          {getCount()}
          {count % 2 === 0 && <Text text={"Hello even Number"} />}
          <br/><br/>
          {getCount1}
        </header>
      </div>
    );
}

export default App;
