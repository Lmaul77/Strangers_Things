import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { editPost, GetPosts } from "../api/index.js";

// import './Posts.css'

const Posts = ({
  allPosts,
  setAllPosts,
}) => {
  let MapPosts = [];
  useEffect(() => {
    GetPosts().then((results) => {
      setAllPosts(results.data.posts);
    });
  }, []);
  if (allPosts && allPosts.length) {
    MapPosts = allPosts.map((element) => {
      return (
        <div key={element._id} className="posts">
          <h1 id="Title">{element.title}</h1>
          <p id="Description">{element.description}</p>
          <div id="Price">Price: {element.price}</div>
          <div id="Author">Author: {element.author.username}</div>
          <div id="Location">Location: {element.location}</div>
          <div id="WillDeliver">
            Willing to Deliver? {element.willDeliver ? "Yes" : "No"}
          </div>
        </div>
      );
    });
  }
  return (
    <div>
      <span>
        <h1 id="postsTitle">
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
