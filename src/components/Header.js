import React from "react";
import { NavLink } from "react-router-dom";

import './Header.css'

const Header = ({loggedIn}) => {
  return (
    <header>
      <h1>
        <NavLink to="/" className={"homeheader"}>Stranger's Things </NavLink></h1>
      <form className="header-buttons">
       {!loggedIn ?
        <>
          <NavLink to="/posts" className={"routebuttons"}>
            POSTS
          </NavLink>
          <NavLink to="/register" className={"routebuttons"}>
            REGISTER
          </NavLink>
          <NavLink to="/login" className={"routebuttons"}>
            LOGIN
          </NavLink>
        </>
        : 
        <>
        <NavLink to="/posts" className={"routebuttons"}>
            POSTS
          </NavLink>
          <NavLink to="/profile" className={"routebuttons"}>
            PROFILE
          </NavLink>
          <NavLink to="/logout" className={"routebuttons"}>
            LOGOUT
          </NavLink>
        </>
        }
      </form>
    </header>
  );
};

export default Header;
