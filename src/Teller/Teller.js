import React, { useState } from 'react';
import Login from '../Account/Login/Login';
import useCustom from '../Account/Login/hook/stately'
import MoneyButton from './MoneyButton'
import MoneyEntry from './MoneyEntry'
import AccountInfo from './Account'

const Teller = () => {


  return ( <div>
    <AccountInfo />
<MoneyButton type="5"/>
<MoneyButton type="10"/>
<MoneyButton type="20"/>
<MoneyEntry />
    </div>
  );
}

export default Teller;
