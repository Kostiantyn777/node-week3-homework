import React, { useState } from "react";
import PropTypes from "prop-types";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <form>
        <h3>Please Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => console.log(setEmail(e.target.value))}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => console.log(setPassword(e.target.value))}
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
