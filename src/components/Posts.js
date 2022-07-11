import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {                 GetPosts } from "../api/index.js";
import NewUserMessage from "./NewUserMessage.js";

// import './Posts.css'

const Posts = ({
  allPosts,
  setAllPosts,
  username
}) => {
  console.log(username)
  let MapPosts = [];
  useEffect(() => {
    GetPosts().then((results) => {
      setAllPosts(results.data.posts);
    });
  }, []);
  if (allPosts && allPosts.length) {
    MapPosts = allPosts.map(({title, description, price, location, author, _id, willDeliver}) => {
      return (
        <div key={_id} className="posts">
          <h1 id="Title">{title}</h1>
          <p id="Description">{description}</p>
          <div id="Price">Price: {price}</div>
          <div id="Author">Author: {author.username}</div>
          <div id="Location">Location: {location}</div>
          <div id="WillDeliver">
            Willing to Deliver? {willDeliver ? "Yes" : "No"}
          </div>
          {
            (author.username !== localStorage.getItem("username")) ?
              <NewUserMessage _id={_id} />
               :null
          }
        </div>
      );
    });
  }
  return (
    <div>
      <span>
        <h1>
          <div id="postsheader">POSTS</div>
          <form>
            <input
              type="text"
              name="search-term"
              placeholder="Search Posts"
              id="searchBar"
            ></input>
          </form>
          <div id="linktoadd">
            <NavLink to="/adduserposts" className={"addButton"}>
              (ADD POST)
            </NavLink>
          </div>
        </h1>
      </span>
      {MapPosts && MapPosts.length ? <div>{MapPosts}</div> : null}
    </div>
  );
};

export default Posts;
