import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { store1, store2 } from './redux/store'
import { useState } from 'react'

function App() {
  return (
    <Provider store={store1}>
      <Provider store={store2}>
        <div className="App">
          <header className="App-header">
            <Counter />
          </header>
        </div>
      </Provider>
    </Provider>
  );
}
function Counter() {
  // State: a counter value
  const [counter, setCounter] = useState(0);

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    store1.dispatch({ type: "ADD_COUNT" });

    console.log("Add",store1.getState());

    setCounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    store2.dispatch({ type: "MINUS_COUNT" });
    console.log("Minus",store2.getState());

    setCounter((prevCounter) => prevCounter - 1);
  }

  // View: the UI definition
  return (
    <div>
      Value: {store1.getState().number} <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default App;
