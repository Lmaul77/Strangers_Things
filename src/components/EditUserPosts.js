import React, { useState } from "react";
import { editPost, getProfile } from "../api";

const EditUserPosts = ({ _id, setMyInfo, willDeliver }) => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [newCheckbox, setNewCheckbox] = useState(willDeliver);

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    await editPost(
      token,
      titleInput,
      descriptionInput,
      priceInput,
      newCheckbox,
      _id
    );
    const result = await getProfile(token);
    setMyInfo(result.data.posts);
  }

  function handleChange(event) {
    event.preventDefault();
    setNewCheckbox(!newCheckbox);
  }
  return (
    <>
      <div id="EditBoxCenter">
        <div id="EditBox">
          <div>
            <h1>Edit Post</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                id="ETitle"
                placeholder="Title"
                value={titleInput}
                onChange={(event) => {
                  setTitleInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="EDescription"
                placeholder="Description"
                value={descriptionInput}
                onChange={(event) => {
                  setDescriptionInput(event.target.value);
                }}
              />
            </div>
            <div>
              <input
                id="EPrice"
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
                  value={newCheckbox}
                  type="checkbox"
                  name="willDeliver"
                  onChange={handleChange}
                />
                Willing to Deliver?
              </label>
            </div>
            <button id="Ebutton" type="Submit">
              SAVE
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserPosts;
