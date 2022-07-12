import React from "react";
import { deletePost } from "../api";
import { useNavigate } from "react-router-dom";

const DeleteUserPost = ({_id, setAllPosts, allPosts}) => {
    const Navigate = useNavigate();

    async function handleDelete(event) {
      event.preventDefault();
      console.log(event, "delete event")
      const token = localStorage.getItem("token");
      const deletedPost = await deletePost(
        token,
        _id
      );
    //   setAllPosts([deletedPost, ...allPosts]);
      Navigate("/profile");
    }
    return <form onSubmit={handleDelete}>
        <button id="deleteButton" type="Submit">DELETE</button>
    </form>
}

export default DeleteUserPost