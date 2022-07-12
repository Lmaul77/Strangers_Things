import React from "react";
import { NavLink } from "react-router-dom";


import "./Home.css";

const Home = ({ loggedIn, username }) => {
  if (!loggedIn) {
    return (
      <div>
        <h1 id="welcomemessage">Welcome to Stranger's Things</h1>
        <div className="welcomebox">
        <NavLink to="/login" className={"welcomelink"}>
            LOGIN
          </NavLink>
          <div>OR</div>
          <NavLink to="/register" className={"welcomelink"}>
            CREATE AN ACCOUNT
          </NavLink>
          </div>
      </div>
    );
  } else {
    return (
      <div>
        <h1 id="greetmessage">Welcome to Stranger's Things, {localStorage.getItem("username", username)}</h1>
        <div className="welcomebox">
        <NavLink to="/profile" className={"welcomelink"}>
            VIEW YOUR PROFILE
          </NavLink>
          </div>
      </div>
    );
  }
};

export default Home;
