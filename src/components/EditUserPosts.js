import React, {useState} from "react";
import { editPost, getProfile } from "../api";
import { useNavigate } from "react-router-dom";

const EditUserPosts = ({
  checkbox,
  setCheckbox,
  _id,
  setMyInfo,
}) => {
  const Navigate = useNavigate();
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
    const result = await getProfile(token)
      setMyInfo(result.data.posts);
    
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
