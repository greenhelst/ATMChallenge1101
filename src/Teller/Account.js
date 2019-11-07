import React, { useState } from 'react';
import useCustom from '../Account/Login/hook/stately'
const AccountInfo = (prop) =>
{
  const [globalState, setGlobalState] = useCustom();
    for (let i = 0; i < globalState.money.length; i++)
    {
      console.log(globalState.money[i][0]);
    }

    return (
      <div>
      <p>Hello your balance is: {globalState.capital}</p>
      </div>
    )
    }

export default AccountInfo;
