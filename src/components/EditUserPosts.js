import React from 'react';

const EditUserPosts = () => {
    function deliverCheck() {
        let check = document.createElement("input")
        check.setAttribute("type", "checkbox")
        document.body.appendChild(check)
    }

    return  (<>
        <div id="RegisterBoxCenter">
        <div id="RegisterBox">
        <div>
            <h1>
                Edit New Post
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
        <button onClick={deliverCheck()}></button>
        <button type="Submit">SAVE</button>
        </form>
        </div>
        </div>
        </>)
} 

export default EditUserPosts