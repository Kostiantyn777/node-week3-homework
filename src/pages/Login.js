import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <span>
        If you do not have an account
        <Link to="/signup">Sign up</Link>
      </span>
      <br />
      <span>
        Go Back
        <Link to="/">Home</Link>
      </span>
    </>
  );
};

export default Login;
