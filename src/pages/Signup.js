import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <>
          <h1>Signup Page</h1>
          <span>
            If you have an account
            <Link to="/login">Log In</Link>
          </span>
          <br />
          <span>
            Go Back
            <Link to="/">Home</Link>
          </span>
        </>
      );
};

export default Signup;
