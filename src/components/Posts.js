import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import { editPost, GetPosts } from '../api/index.js'
import { useNavigate } from "react-router-dom";
import EditUserPosts from './EditUserPosts.js';

// import './Posts.css'

const Posts = ({checkbox, setCheckbox, titleInput, descriptionInput, priceInput, willDeliver, locationInput, setTitleInput, setDescriptionInput, setPriceInput, setLocationInput}) => {

    const navigate = useNavigate()    

    function handleEdit () {
        const token = localStorage.getItem("token")
        editPost(token, titleInput, descriptionInput, priceInput, willDeliver, postId)
        navigate("/edituserposts")
    }

    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        GetPosts().then((results)=>{
            console.log(results)
            setPosts(results.data.posts);
        }
        )
    },[])
    const MapPosts = posts.map((element)=>{
        const postId = element._id
        return(<div key={ element.id } className="posts">
            <h1 id="Title">{ element.title }</h1>
            <p id="Description">{ element.description }</p>
            <div id="Price">Price: { element.price }</div>
            <div id="Author">Author: { element.author.username }</div>
            <div id="Location">Location: { element.location }</div>
            <div id="WillDeliver">Willing to Deliver? { element.willDeliver ? "Yes" : "No" }</div>
            <EditUserPosts postId={postId} checkbox={checkbox} setCheckbox={setCheckbox} titleInput={titleInput} setTitleInput={setTitleInput} descriptionInput={descriptionInput} setDescriptionInput={setDescriptionInput} priceInput={priceInput} setPriceInput={setPriceInput} locationInput={locationInput} setLocationInput={setLocationInput}/>
            <NavLink to="/edituserposts">Edit</NavLink>
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