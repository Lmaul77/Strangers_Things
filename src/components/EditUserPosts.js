import React, {useState} from "react";
import { editPost } from "../api";


const EditUserPosts = ({
  checkbox,
  setCheckbox,
  _id,
}) => {
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
  const newpost = await editPost(token,
    titleInput,
    descriptionInput,
    priceInput,
    true,
    _id);
    console.log(newpost)
  }
// "come back to later"
  function handleChange(event) {
    event.preventDefault();
    setCheckbox(!checkbox);
  }

  return (
    <>
      <div id="RegisterBoxCenter">
        <div id="RegisterBox">
          <div>
            <h1>Edit New Post</h1>
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
                  checked={checkbox}
                  type="checkbox"
                  name="willDeliver"
                  onChange={handleChange}
                />
                Willing to Deliver?
              </label>
            </div>
            <button type="Submit">SAVE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserPosts;
