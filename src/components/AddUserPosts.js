import React, {useEffect, useState, useTransition} from "react";
import { addPost } from "../api";

const AddUserPosts = ({
  titleInput,
  setTitleInput,
  descriptionInput,
  setDescriptionInput,
  priceInput,
  setPriceInput,
}) => {
    const [checkbox, setCheckbox] = useState("unchecked")

        function handleSubmit(event) {
            event.preventDefault()
            const token = localStorage.getItem("token")
            addPost(token, titleInput, descriptionInput, priceInput, checkbox === "checked")
        }

        function handleChange(event) {
            event.preventDefault()
            setCheckbox((checkbox === "checked") ? "unchecked" : "checked")
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
              <input id="willDeliver" type="checkbox" name="willDeliver" onChange={handleChange}/>
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
