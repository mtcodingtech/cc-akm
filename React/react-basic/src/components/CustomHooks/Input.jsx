import React from "react";
import useInput from "./UseInputHook";

function Input() {
  const [name, handleChange] = useInput();
  const [email, handleChangeEmail] = useInput();
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={handleChangeEmail}
      />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </>
  );
}

export default Input;
