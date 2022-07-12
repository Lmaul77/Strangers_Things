import React from "react";

const messagesFrom = ({ profileInfo }) => {
  return (
    <div>
      {profileInfo.data
        ? profileInfo.data.messages.map((content, idx) => {
            return (
              <div key ={`messagesFrom ${idx}`} id="MFBox">
                <span>
                  <h3 className="MFHeader">User:</h3>
                  {content.fromUser.username}
                </span>
                <span>
                  <h3 className="MFHeader">Re: Post:</h3>
                  {content.post.title}
                </span>
                <div>
                  <h3 className="MFHeader">Message:</h3>
                  {content.content}
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default messagesFrom;
