import { useState, useEffect } from 'react';

let listeners = [];
let state = { isLoggedIn: false,
capital: 220,
withdrawals: 0,
overdraft: 100,
overdraftUse: false,
money: [
  [4,5], // 4 x £5 notes
  [15,10], // 15 x £10 notes
  [7, 20] // 7 x £20 notes
] };
const setState = (newState) => {
  state = { ...state, ...newState };
  listeners.forEach((listener) => {
    listener(state);
    console.log(listeners);
  });
};

const useCustom = () => {
  const newListener = useState()[1];
  useEffect(() => {
    listeners.push(newListener);
  }, [false]);
  return [state, setState];
};

export default useCustom;
