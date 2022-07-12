import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GetPosts } from "../api/index.js";
import SearchandPost from "./SearchandPost.js";

const Posts = ({
  allPosts,
  setAllPosts,
  username,
  loggedIn,
  newData,
  setNewData,
  checkbox
}) => {
  const [filter, setFilter] = useState([]);

  function searchItems(searchVal) {
    const data = allPosts.filter((item) => {
      if (searchVal.length > 0) {
        return item.title.toLowerCase().includes(searchVal.toLowerCase()) ||
          item.description.toLowerCase().includes(searchVal.toLowerCase()) ||
          item.author.username
            .toLowerCase()
            .includes(searchVal.toLowerCase()) ||
          item.price.toLowerCase().includes(searchVal.toLowerCase())
          ? true
          : false;
      } else {
        return;
      }
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
                  checkbox={checkbox}
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
                  checkbox={checkbox}
                />
              );
            })}
      </div>
    </>
  );
};

export default Posts;
