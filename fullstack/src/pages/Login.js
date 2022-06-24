import React, { useState } from "react";
import PropTypes from "prop-types";

// Function to make a POST request to the server
async function loginUser(credentials) {
  return fetch("http://localhost:8080/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      email,
      password,
    });
    setToken(token);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Please Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            required
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            required
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="/">Password?</a>
        </p>
      </form>
    </>
  );
};
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
export default Login;
