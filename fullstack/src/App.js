import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Preferences from "./pages/Preferences";
import useToken from "./components/useToken";

function App() {
  const { token, setToken } = useToken();

  const userSignOut = () => {
    localStorage.removeItem(token);
    setToken("");
    console.log(token);
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>
                  Sign In
                </Link>
              </li>
              <li className="nav-item">
                {!token ? (
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign Up
                  </Link>
                ) : (
                  <Link className="nav-link" to={"/"} onClick={userSignOut}>
                    Sign Out
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<Home token={token} />} />

            <Route path="/sign-up" element={<Signup />} />
            {token ? (
              <Route path="/sign-in" element={<Dashboard />} />
            ) : (
              <Route path="/sign-in" element={<Login setToken={setToken} />} />
            )}
            <Route path="/preferences" element={<Preferences />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
