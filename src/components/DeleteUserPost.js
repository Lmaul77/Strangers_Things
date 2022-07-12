import React from "react";
import { deletePost, getProfile } from "../api";

const DeleteUserPost = ({ _id, setMyInfo }) => {
  async function handleDelete(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const deletedPost = await deletePost(token, _id);
    const result = await getProfile(token);
    setMyInfo(result.data.posts);
  }
  return (
    <form onSubmit={handleDelete}>
      <button id="deleteButton" type="Submit">
        DELETE
      </button>
    </form>
  );
};

export default DeleteUserPost;
