import React, {useState} from 'react';
// Custom hook to insert our pin number.
const UseLogin = (initialValues, callback) => {
  const [inputs, setInputs] = useState(initialValues);
  const handleLogin = (event) => {
    if (event)
      event.preventDefault();
      callback();
  }
    const handlePinChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]:
    event.target.value}));
    }
  return {
    handleLogin,
    handlePinChange,
    inputs
  };
}

export default UseLogin;
