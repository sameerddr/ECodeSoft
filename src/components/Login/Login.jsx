import React, { useState } from "react";

import "./Login.css";

function Login({ sets }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setEmails = (e) => {
    setEmail(e.target.value);
  };

  const setPass = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length > 5 && password.length > 5) {
      sets(true);
    } else {
      alert("Please Enter Valid Email & Password");
    }
    console.log("working");
  };

  return (
    <>
      <div className="container">
        <div className="login">
          <div className="form">
            <h2>Login</h2> <br />
            <label htmlFor="email">
              <input
                type="email"
                id="email"
                placeholder="Username or Email"
                onChange={setEmails}
              />
            </label>{" "}
            <br /> <br />
            <label htmlFor="passw">
              <input
                type="password"
                id="passw"
                placeholder="password"
                onChange={setPass}
              />
            </label>{" "}
            <br /> <br />
            <button type="submit" className="btn" onClick={handleSubmit}>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
