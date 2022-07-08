import React from "react";
import { addPost } from "../api";
import {
    useNavigate,
  } from "react-router-dom";


const AddUserPosts = ({
  titleInput,
  setTitleInput,
  descriptionInput,
  setDescriptionInput,
  priceInput,
  setPriceInput,
  checkbox,
  setCheckbox,
  allPosts,
  setAllPosts
}) => {

const Navigate = useNavigate()

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const freshPost = await addPost(
      token,
      titleInput,
      descriptionInput,
      priceInput,
      checkbox === "checked"
    );
    console.log(freshPost)
    setAllPosts([freshPost, ...allPosts])
    Navigate("/posts")

  }

  function handleChange(event) {
    event.preventDefault();
    setCheckbox(checkbox === "checked" ? "unchecked" : "checked");
  }

  return (
    <>
      <div id="RegisterBoxCenter">
        <div id="RegisterBox">
          <div>
            <h1>Add New Post</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="Title"
                placeholder="Title"
                value={titleInput}
                onChange={(event) => {
                  setTitleInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="Description"
                placeholder="Description"
                value={descriptionInput}
                onChange={(event) => {
                  setDescriptionInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="Price"
                placeholder="Price"
                value={priceInput}
                onChange={(event) => {
                  setPriceInput(event.target.value);
                }}
              />
            </div>
            <div>
              <label htmlFor="willDeliver">
                <input
                  id="willDeliver"
                  type="checkbox"
                  name="willDeliver"
                  onChange={handleChange}
                />
                Willing to Deliver?
              </label>
            </div>
            <button type="Submit">CREATE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUserPosts;
