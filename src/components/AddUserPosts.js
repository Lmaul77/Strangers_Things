import React from "react";
import { addPost } from "../api";
import { useNavigate } from "react-router-dom";

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
  setAllPosts,
}) => {
  const Navigate = useNavigate();

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
    setAllPosts([freshPost, ...allPosts]);
    Navigate("/posts");
  }

  function handleChange(event) {
    event.preventDefault();
    setCheckbox(checkbox === "checked" ? "unchecked" : "checked");
  }

  return (
    <>
      <div id="AddFormCenter">
        <div id="AddForm">
          <div>
            <h1>Add New Post</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="AddTitle"
                placeholder="Title"
                value={titleInput}
                onChange={(event) => {
                  setTitleInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="AddDescription"
                placeholder="Description"
                value={descriptionInput}
                onChange={(event) => {
                  setDescriptionInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="AddPrice"
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
                  id="AddwillDeliver"
                  type="checkbox"
                  name="willDeliver"
                  onChange={handleChange}
                />
                Willing to Deliver?
              </label>
            </div>
            <button id="AddButton" type="Submit">
              CREATE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddUserPosts;
