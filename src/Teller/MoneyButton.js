import React, { useState } from 'react';
import useCustom from '../Account/Login/hook/stately'
const MoneyButton = (prop) =>
{
  const [globalState, setGlobalState] = useCustom();
  const handlemoney = () =>
  {
    console.log(prop.type)
    for (let i = 0; i < globalState.money.length; i++)
    {
      if(prop.type == globalState.money[i][1])
      {
        if(globalState.capital >= prop.type) {
        console.log("Match")
        let remainder = globalState.capital - prop.type;
        setGlobalState({ capital: remainder});
      }
      else {
        console.log("NO MORE FUNDS")
      }
      }
    }
  }
  return <button onClick={handlemoney}>£{prop.type}</button>
}

export default MoneyButton;
