import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { GetPosts } from '../api/index.js'

// import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        GetPosts().then((results)=>{
            console.log(results)
            setPosts(results.data.posts);
        }
        )
    },[])
    const MapPosts = posts.map((element)=>{
        return(<div key={ element.id } className="posts">
            <h1 id="Title">{ element.title }</h1>
            <p id="Description">{ element.description }</p>
            <div id="Price">Price: { element.price }</div>
            <div id="Author">Author: { element.author.username }</div>
            <div id="Location">Location: { element.location }</div>
            <div id="WillDeliver">Willing to Deliver? { element.willDeliver ? "Yes" : "No" }</div>
          </div>
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