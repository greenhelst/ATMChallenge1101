import React, { useState } from 'react';
import useCustom from '../Account/Login/hook/stately'
import UseLogin from '../Account/Login/hook/hook'

function MoneyEntry(props) {
  const [name, setMoney] = useState("");
const [globalState, setGlobalState] = useCustom();
  const handleSubmit = (evt) => {
    let currentBalance, oldBalance, total;

      evt.preventDefault();
      if (globalState.capital >= name && globalState.overdraftUse == false)
      {
        let remainder = globalState.capital - name;
        setGlobalState({ capital: remainder});
      }
/*
      else if(name > globalState.capital && globalState.overdraft > 0)
      {
        total = globalState.overdaft + globalState.capital;
        alert(total)
        setGlobalState({ capital: total});
      }

        else if(total >= name)
        {
      //  setGlobalState({ capital: currentBalance, overdaft: remainder});
        console.log("The amount you have entered is greater than what you have in your account plus overdaft");
      }
      */
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Withdraw Amount:
        <input
          type="text"
          value={name}
          onChange={e => setMoney(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default MoneyEntry;
