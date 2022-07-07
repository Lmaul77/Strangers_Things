import React from 'react';
import { NavLink } from 'react-router-dom';

import './Posts.css'

const Posts = () => {
return (
    <div>
        <span>
        <h1>
            <div id="postsheader">
            POSTS
            </div>
        <form>
            <input type="text" name="search-term" placeholder="Search Posts" id="searchBar"></input>
        </form>
        <div id="linktoadd">
        <NavLink to="/adduserpost">(ADD POST)</NavLink>
        </div>
        </h1>
        </span>
        <div>
            {/* this is where posts will go! */}
        </div>
    </div>
)
} 

export default Posts