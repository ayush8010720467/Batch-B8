import './App.css';
import Header from './Header';
import Setting from './Setting/Setting';
import React, { useContext, useState, useMemo } from 'react';

export const GlobalContext = React.createContext({});

function App() {
  const [backgroundColor, setBgColor] = useState("#fff");
  const [showSetting, setShowSetting ] = useState(false);
  const value = useMemo(
    () => ({ backgroundColor, setBgColor, showSetting, setShowSetting }),
    [backgroundColor, showSetting]
  );
  // const value = { backgroundColor, setBgColor, showSetting, setShowSetting };
  return (
    <GlobalContext.Provider value={value}>
      <AppBody />
    </GlobalContext.Provider>
  );
}

function AppBody(){
  let contextSetting = useContext(GlobalContext);
  return (
    <div
      className="App"
      style={{ backgroundColor: contextSetting["backgroundColor"] }}
    >
      <Header />
      {contextSetting["showSetting"] && <Setting />}
    </div>
  );
}
export default App;
