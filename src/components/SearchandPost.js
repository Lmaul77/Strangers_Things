import React from "react";
import NewUserMessage from "./NewUserMessage";

const SearchandPost = ({ element, loggedIn }) => {
  return (
    <div key={element._id} className="posts">
      <h1 id="Title">{element.title}</h1>
      <p id="Description">{element.description}</p>
      <div id="Price">Price: {element.price}</div>
      <div id="Author">Author: {element.author.username}</div>
      <div id="Location">Location: {element.location}</div>
      <div id="WillDeliver">
        Willing to Deliver? {element.willDeliver ? "Yes" : "No"}
      </div>
      {loggedIn ? (
        <div>
          {element.author.username !== localStorage.getItem("username") ? (
            <NewUserMessage _id={element._id} />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default SearchandPost;
