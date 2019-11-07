import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './Account/Login/Login'
import Teller from './Teller/Teller'
import useCustom from './Account/Login/hook/stately'

// Greeting on start, has Michael input his pin?
function Greeting(props) {

  const [globalState, setGlobalState] = useCustom();
  if (globalState.isLoggedIn) {
    return <Teller />;
  }
  return <Login />;
}



function App() {

  return (
    <div className="App">
      <header className="App-header">
      <Greeting />
      </header>
    </div>
  );
}

export default App;
