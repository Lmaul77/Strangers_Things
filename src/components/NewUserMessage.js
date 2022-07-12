import React, { useState } from "react";
import { sendNewMessage } from "../api";

import "./NewUserMessage.css";

const NewUserMessage = ({ sendMessage, setSendMessage, _id }) => {
  const [messageContent, setMessageContent] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const message = await sendNewMessage(token, _id, messageContent);
    return message
  }


  return (
    <div id="Message">
      <div id="MessageHeader">
        <h1>Message User about This Post</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            id="MessageBox"
            placeholder="Your Message Here"
            onChange={(event) => {
              setMessageContent(event.target.value);
            }}
          ></input>
        </div>
        <button id="sendButton" type="Submit">SEND MESSAGE</button>
      </form>
    </div>
  );
};

export default NewUserMessage;
