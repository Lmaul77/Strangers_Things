import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { App, Header, LoginLogout, NewUserMessage, UserPosts, Posts, Profile, UserMessages, Search, AddUserPosts } from "./components";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
        <App />
  </BrowserRouter>
);
