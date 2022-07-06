import React from "react";
import { NavLink } from "react-router-dom";

import './Header.css'

const Header = () => {
  return (
    <header>
      <h1>Stranger's Things</h1>
      <form className="header-buttons">
        <>
          {/* might need to change capitalization*/}
          <NavLink to="/posts" activeClassName="current">
            POSTS
          </NavLink>
          <NavLink to="/profile" activeClassName="current">
            PROFILE
          </NavLink>
          <NavLink to="/register" activeClassName="current">
            REGISTER
          </NavLink>
          <button onClick={"handleUserLogin"}>LOGIN</button>
        </>
      </form>
    </header>
  );
};

export default Header;
