import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GetPosts } from "../api/index.js";
import SearchandPost from "./SearchandPost.js";

// import './Posts.css'

const Posts = ({ allPosts, setAllPosts, username, loggedIn }) => {
  const [filter, setFilter] = useState([]);
  const [newData, setNewData] = useState([]);

  function searchItems(searchVal) {
    const data = allPosts.filter((item) => {
      return item.title.toLowerCase().includes(searchVal.toLowerCase())
        ? true
        : false;
    });
    data.length > 0 ? setFilter(data) : setFilter([]);
  }

  useEffect(() => {
    searchItems(newData);
  }, [newData]);

  useEffect(() => {
    GetPosts().then((results) => {
      setAllPosts(results.data.posts);
    });
  }, []);
  
  return (
    <>
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
                onChange={(event) => {
                  setNewData(event.target.value);
                }}
              ></input>
            </form>
            <div id="linktoadd">
              {loggedIn ? (
                <NavLink to="/adduserposts" className={"addButton"}>
                  (ADD POST)
                </NavLink>
              ) : null}
            </div>
          </h1>
        </span>
      </div>
      <div>
        {filter.length > 0
          ? filter.map((element) => {
              return (
                <SearchandPost
                  key={element._id}
                  element={element}
                  loggedIn={loggedIn}
                  username={username}
                  allPosts={allPosts}
                  setAllPosts={setAllPosts}
                />
              );
            })
          : allPosts.map((element) => {
              return (
                <SearchandPost
                  key={element._id}
                  element={element}
                  loggedIn={loggedIn}
                  username={username}
                  allPosts={allPosts}
                  setAllPosts={setAllPosts}
                />
              );
            })}
      </div>
    </>
  );
};

export default Posts;
