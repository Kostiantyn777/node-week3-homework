import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
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
    </>
  );
};

export default Home;
