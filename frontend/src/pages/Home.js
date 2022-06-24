import React from "react";
import { Link } from "react-router-dom";

const Home = ({ token }) => {
  return (
    <>
      {!token ? (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/sign-in" className="nav-link">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/sign-up" className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
      ) : (
        <h2>Welcome, You are SIGNED IN</h2>
      )}
    </>
  );
};

export default Home;
