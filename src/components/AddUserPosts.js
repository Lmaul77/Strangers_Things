import React from 'react';
import { addPost } from '../api';

const AddUserPosts = () => {
    function deliverCheck() {
        let check = document.createElement("input")
        check.setAttribute("type", "checkbox")
        document.body.appendChild(check)
    }

    // addPost(localStorage.getItem("token"))

    return  (<>
        <div id="RegisterBoxCenter">
        <div id="RegisterBox">
        <div>
            <h1>
                Add New Post
            </h1>
        </div>
        <form onSubmit ={"handleSubmit"}>
        <div>
            <input id="Title" placeholder="Title"></input>
        </div>
        <div>
            <input id="Description" placeholder="Description"></input>
        </div>
        <div>
            <input id="Price" placeholder="Price"></input>
        </div>
        <div>
            <input id="Location" placeholder="Location"></input>
        </div>
        <div>
            <input id="Willing To Deliver" type="checkbox" ></input>
            Willing to Deliver?
        </div>
        <button type="Submit">CREATE</button>
        </form>
        </div>
        </div>
        </>)
} 

export default AddUserPosts