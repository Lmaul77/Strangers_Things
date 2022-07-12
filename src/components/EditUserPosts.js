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
                  id="EwillDeliver"
                  checked={checkbox}
                  type="checkbox"
                  name="willDeliver"
                  onChange={handleChange}
                />
                Willing to Deliver?
              </label>
            </div>
            <button id="Ebutton" type="Submit">SAVE</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUserPosts;
