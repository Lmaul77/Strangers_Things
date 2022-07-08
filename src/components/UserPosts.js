import React, { useEffect } from "react";
import { getProfile } from "../api";

import "./UserPosts.css";

const UserPosts = ({ myInfo, setMyInfo, loggedIn }) => {
  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("token");
      getProfile(token).then((results) => {
        // console.log(results, "results from my profile");
        setMyInfo(results.data.posts);
      });
    } else {
      setMyInfo([]);
    }
  }, [loggedIn]);

  return (
    <div>
      {myInfo && myInfo.length
        ? myInfo.map((info) => {
            // console.log(info, "returning my info");
            return (
              <div key={info._id} className="posts">
                <div>
                  <h2> </h2>{" "}
                </div>
                <h1 id="Title">{info.title}</h1>
                <p id="Description">{info.description}</p>
                <div id="Price">Price: {info.price}</div>
                <div id="Location">Location: {info.location}</div>
                <div id="WillDeliver">
                  Willing to Deliver? {info.willDeliver ? "Yes" : "No"}
                </div>
              </div>
            ); 
          })
        : null}
    </div>
  );
};

export default UserPosts;
