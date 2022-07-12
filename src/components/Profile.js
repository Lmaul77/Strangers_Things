import React, { useState, useEffect } from "react";
import { getProfile } from "../api";
import UserMessages from "./UserMessages";
import UserPosts from "./UserPosts";
import MessagesFrom from "./MessagesFrom";
// import './Profile.css'

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
      console.log(myReturnedInfo);
    }
    getMyInfo();
  }, []);

  return (
    <div>
      <h1 id="ProfileHeader">
        WELCOME {localStorage.getItem("username", username)}
      </h1>
      {/* this will be changed to logged in user */}
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
          {/* this will be changed to logged in user */}
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
