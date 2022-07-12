import React, { useState, useEffect } from "react";
import { getProfile } from "../api";
import UserPosts from "./UserPosts";
import MessagesFrom from "./MessagesFrom";

const Profile = ({
  username,
  loggedIn,
  myInfo,
  setMyInfo,
  allPosts,
  setAllPosts,
  setTitleInput,
  setDescriptionInput,
  setPriceInput,
  setLocationInput,
  titleInput,
  descriptionInput,
  priceInput,
  locationInput,
}) => {
  let token = "";
  const [profileInfo, setProfileInfo] = useState({});
  useEffect(() => {
    token = localStorage.getItem("token");
    async function getMyInfo() {
      const myReturnedInfo = await getProfile(token);
      setProfileInfo(myReturnedInfo);
    }
    getMyInfo();
  }, []);

  return (
    <div>
      <h1 id="ProfileHeader">
        WELCOME {localStorage.getItem("username", username)}
      </h1>
      <div id="gridcontainer">
        <div id="messagesContainer">
          <div id="messagesFromBox">
            <h1>MESSAGES FROM</h1>
            <div className="gridBoxes">
              <MessagesFrom profileInfo={profileInfo} />
            </div>
          </div>
        </div>
        <div id="userPostsBox">
          <h1>USER POSTS</h1>
          <div className="gridBoxes">
            <UserPosts
              titleInput={titleInput}
              descriptionInput={descriptionInput}
              priceInput={priceInput}
              locationInput={locationInput}
              myInfo={myInfo}
              setMyInfo={setMyInfo}
              loggedIn={loggedIn}
              allPosts={allPosts}
              setAllPosts={setAllPosts}
              setTitleInput={setTitleInput}
              setDescriptionInput={setDescriptionInput}
              setPriceInput={setPriceInput}
              setLocationInput={setLocationInput}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
