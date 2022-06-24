import React from "react";
import { Link } from "react-router-dom";

const Home = ({ token }) => {
  return (
    <>
      {!token ? (
        <div className="home">
          <h2>Hello stranger, please go to Sign In Page</h2>
          <Link to="/sign-in" className="nav-link">
            Sign In
          </Link>
        </div>
      ) : (
        <h2>Welcome, You are SIGNED IN</h2>
      )}
    </>
  );
};

export default Home;
