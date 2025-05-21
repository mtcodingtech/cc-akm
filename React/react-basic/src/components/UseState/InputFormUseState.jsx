import React, { useState } from "react";

function InputFormUseState() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <>
      <label>First Name</label>
      <input
        type="text"
        onChange={(e) => {
          setForm({
            ...form,
            firstName: e.target.value,
          });
        }}
      />
      <br />

      <label>Last Name</label>
      <input
        type="text"
        onChange={(e) => {
          setForm({
            ...form,
            lastName: e.target.value,
          });
        }}
      />
      <br />

      <label>Email</label>
      <input
        type="email"
        onChange={(e) => {
          setForm({
            ...form,
            email: e.target.value,
          });
        }}
      />

      <p>first name: {form.firstName}</p>
      <p>last name: {form.lastName}</p>
      <p>email : {form.email}</p>
    </>
  );
}

export default InputFormUseState;
