import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const Navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    pass: "",
    conPass: "",
  };
  const [registerValues, setRegisterValues] = useState(initialValues);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setRegisterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleLogIn() {
    Navigate("/login");
  }

  function handleRegister(event) {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      Navigate("/login");
    } else {
      alert("enter details correctly");
    }

    const newData = localStorage.getItem("registeredUsers")
      ? JSON.parse(localStorage.getItem("registeredUsers"))
      : [];

    newData.push(registerValues);
    localStorage.setItem("registeredUsers", JSON.stringify(newData));
  }

  function validateForm() {
    let flag = true;
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

    if (registerValues.name.length === 0) {
      alert("please enter name");
      flag = false;
    }

    if (registerValues.email.length === 0) {
      alert("please enter email ID");
      flag = false;
    } else if (
      registerValues.email &&
      !registerValues.email.match(validEmail)
    ) {
      alert("enter valid Email ID");
      flag = false;
    }

    if (registerValues.pass.length === 0) {
      alert("enter Password");
      flag = false;
    } else if (registerValues.pass && !registerValues.pass.match(validPass)) {
      alert("enter valid Password");
      flag = false;
    }

    if (registerValues.pass !== registerValues.conPass) {
      alert("confirm password does not match");
      flag = false;
    }

    return flag;
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "120px",
        }}
      >
        <fieldset>
          <form style={{ color: "yellowgreen" }}>
            <h2 style={{ color: "pink" }}> Registration Form </h2>
            <label>
              {" "}
              Enter username :
              <input
                type="text"
                name="name"
                value={registerValues.name}
                onChange={handleChange}
              />
            </label>{" "}
            <br />
            <label>
              {" "}
              Enter email-ID :
              <input
                type="text"
                name="email"
                value={registerValues.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              {" "}
              Enter Password :
              <input
                type="text"
                name="pass"
                value={registerValues.pass}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              {" "}
              Enter Confirm Password :
              <input
                type="text"
                name="conPass"
                value={registerValues.conPass}
                onChange={handleChange}
              />
            </label>
            <br />
            <button onClick={handleLogIn}> Log In </button>
            <button onClick={handleRegister}> Register </button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
export default Register;
