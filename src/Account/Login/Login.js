import React, {useState, useEffect} from 'react';
import UseLogin from './hook/hook'
import axios from 'axios';
import useCustom from './hook/stately'
import classes from './login.module.css'


const PinLogin = () => {
  const [globalState, setGlobalState] = useCustom();
  const login = () => {
    axios.post('https://frontend-challenge.screencloud-michael.now.sh/api/pin/', {
    pin:inputs.pinNumber,
  headers: {
    contentType: 'application/json',
    dataType: 'json',
},
})
.then((response) => {
  setGlobalState({ isLoggedIn: true, capital: 220 });

}, (error) => {
  if(error.response.status === 403)
  {
    console.log("Please enter a correct pin");
  }
});
  }


  const {inputs, handlePinChange, handleLogin} = UseLogin({pinNumber: ''},login);
  return (
    <form className={classes.fadeinme}onSubmit={handleLogin}>
    <h1>Please input your pin</h1>
    <input className={classes.clipped} type="password" name="pinNumber" onChange={handlePinChange}/>
    <br /><button className={classes.button} type="submit">ENTER</button>
    </form>
  );
}

export default PinLogin;
