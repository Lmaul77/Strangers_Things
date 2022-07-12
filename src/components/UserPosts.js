import React, { useEffect } from "react";
import { getProfile } from "../api";
import DeleteUserPost from "./DeleteUserPost";
import EditUserPosts from "./EditUserPosts";

const UserPosts = ({
  titleInput,
  descriptionInput,
  priceInput,
  locationInput,
  setTitleInput,
  setDescriptionInput,
  setPriceInput,
  setLocationInput,
  myInfo,
  setMyInfo,
  loggedIn,
}) => {
  useEffect(() => {
    if (loggedIn) {
      const token = localStorage.getItem("token");
      getProfile(token).then((results) => {
        setMyInfo(results.data.posts);
      });
    } else {
      setMyInfo([]);
    }
  }, [loggedIn]);

  return (
    <div>
      {myInfo && myInfo.length
        ? myInfo.map(
            ({
              title,
              description,
              price,
              location,
              _id,

              willDeliver,
              active,
            }) => {
              if (active) {
                return (
                  <>
                    <div key={_id} className="posts">
                      <div>
                        <h2> </h2>{" "}
                      </div>
                      <h1 id="Title">{title}</h1>
                      <p id="Description">{description}</p>
                      <div id="Price">Price: {price}</div>

                      <div id="Location">Location: {location}</div>
                      <div id="WillDeliver">
                        Willing to Deliver? {willDeliver ? "Yes" : "No"}
                      </div>
                      <div id="linktoedit">
                        <DeleteUserPost _id={_id} setMyInfo={setMyInfo} />
                      </div>
                      <EditUserPosts
                        _id={_id}
                        titleInput={titleInput}
                        setTitleInput={setTitleInput}
                        descriptionInput={descriptionInput}
                        setDescriptionInput={setDescriptionInput}
                        priceInput={priceInput}
                        setPriceInput={setPriceInput}
                        locationInput={locationInput}
                        setLocationInput={setLocationInput}
                        setMyInfo={setMyInfo}
                      />
                    </div>
                  </>
                );
              }
            }
          )
        : null}
    </div>
  );
};

export default UserPosts;
