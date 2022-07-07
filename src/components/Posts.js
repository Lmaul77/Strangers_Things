import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { GetPosts } from '../api/index.js'

import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        GetPosts().then((results)=>{
            setPosts(results.data.posts);
        }

        )
    },[])
    const MapPosts = posts.map((element)=>{
        return(<option key={ element.id } value={ element.id }>
            { element.title }
            { element.description }
            { element.price }
            { element.location }
          </option>
            
            )
    })
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
        <NavLink to="/adduserposts" className={"addButton"}>(ADD POST)</NavLink>
        </div>
        </h1>
        </span>
        <div>
            {MapPosts}
        </div>
    </div>
)
} 

export default Posts