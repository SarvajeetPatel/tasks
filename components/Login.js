import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NoteContext from "../context/NoteContext";

function Login() {
  const Navigate = useNavigate();
  const initialData = {
    email: "",
    pass: "",
  };
  const [logInData, setLogInData] = useState(initialData);
  const { setData, data } = useContext(NoteContext);
  console.log(data);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setLogInData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleLog(event) {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const localData = JSON.parse(localStorage.getItem("registeredUsers"));
      const fetchData = localData.find((mails) => {
        return mails.email === logInData.email && mails.pass === logInData.pass;
      });

      if (!fetchData) {
        alert("user does not exists");
      } else {
        localStorage.setItem("currentUser", JSON.stringify(fetchData));
        setData(fetchData);
        let token = Math.random();
        localStorage.setItem("accessToken", JSON.stringify(token));
        Navigate("/home");
      }
    }
  }

  function validateForm() {
    let flag = true;
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;

    if (logInData.email.length === 0) {
      alert("please enter email ID");
      flag = false;
    } else if (logInData.email && !logInData.email.match(validEmail)) {
      alert("enter valid Email ID");
      flag = false;
    }

    if (logInData.pass.length === 0) {
      alert("enter Password");
      flag = false;
    } else if (logInData.pass && !logInData.pass.match(validPass)) {
      alert("enter valid Password");
      flag = false;
    }

    return flag;
  }

  function handleRegister() {
    Navigate("/register");
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
          <form style={{ color: "skyblue" }}>
            <h2 style={{ color: "pink" }}> Login Form </h2>
            <label>
              {" "}
              Email ID <nbsp />
              <input
                type="text"
                value={logInData.email}
                name="email"
                onChange={handleChange}
              />
            </label>{" "}
            <br />
            <br />
            <label>
              {" "}
              Password
              <nbsp />
              <input
                type="text"
                value={logInData.pass}
                name="pass"
                onChange={handleChange}
              />
            </label>{" "}
            <br />
            <br />
            <button onClick={handleLog}> Log In </button>
            <nbsp />
            <button onClick={handleRegister}> Register </button>
            <nbsp />
            <Link to="/home"> Home </Link>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default Login;
