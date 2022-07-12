import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Header,
  LoginLogout,
  Posts,
  Profile,
  Register,
  AddUserPosts,
  Home,
  Logout,
  UserPosts,
  NewUserMessage,
} from "./";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [titleInput, setTitleInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [authorInput, setAuthorInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [myInfo, setMyInfo] = useState([]);
  const [sendMessage, setSendMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [newData, setNewData] = useState([]);

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <>
        <Routes>
          {loggedIn ? (
            <>
              <Route
                path="/newusermessage"
                element={
                  <NewUserMessage
                    sendMessage={sendMessage}
                    setSendMessage={setSendMessage}
                  />
                }
              />
               <Route
                path="/posts"
                element={
                  <Posts
                    loggedIn={loggedIn}
                    username={username}
                    checkbox={checkbox}
                    setCheckbox={setCheckbox}
                    titleInput={titleInput}
                    setTitleInput={setTitleInput}
                    descriptionInput={descriptionInput}
                    setDescriptionInput={setDescriptionInput}
                    priceInput={priceInput}
                    setPriceInput={setPriceInput}
                    authorInput={authorInput}
                    setAuthorInput={setAuthorInput}
                    locationInput={locationInput}
                    setLocationInput={setLocationInput}
                    allPosts={allPosts}
                    setAllPosts={setAllPosts}
                    newData={newData}
                    setNewData={setNewData}
                  />
                }
              />
              <Route path="/" element={<Home loggedIn={loggedIn} />} />
              <Route
                path="/adduserposts"
                element={
                  <AddUserPosts
                    checkbox={checkbox}
                    setCheckbox={setCheckbox}
                    titleInput={titleInput}
                    setTitleInput={setTitleInput}
                    descriptionInput={descriptionInput}
                    setDescriptionInput={setDescriptionInput}
                    priceInput={priceInput}
                    setPriceInput={setPriceInput}
                    authorInput={authorInput}
                    setAuthorInput={setAuthorInput}
                    locationInput={locationInput}
                    setLocationInput={setLocationInput}
                    allPosts={allPosts}
                    setAllPosts={setAllPosts}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Profile
                  username={username}
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
                }
              />
              <Route
                path="/userposts"
                element={
                  <UserPosts
                    myInfo={myInfo}
                    setMyInfo={setMyInfo}
                    loggedIn={loggedIn}
                  />
                }
              />
              <Route
                path="/logout"
                element={<Logout setLoggedIn={setLoggedIn} />}
              />
            </>
          ) : (
            <>
              <Route
                path="/posts"
                element={
                  <Posts
                    loggedIn={loggedIn}
                    username={username}
                    checkbox={checkbox}
                    setCheckbox={setCheckbox}
                    titleInput={titleInput}
                    setTitleInput={setTitleInput}
                    descriptionInput={descriptionInput}
                    setDescriptionInput={setDescriptionInput}
                    priceInput={priceInput}
                    setPriceInput={setPriceInput}
                    authorInput={authorInput}
                    setAuthorInput={setAuthorInput}
                    locationInput={locationInput}
                    setLocationInput={setLocationInput}
                    allPosts={allPosts}
                    setAllPosts={setAllPosts}
                    newData={newData}
                    setNewData={setNewData}
                  />
                }
              />
              <Route path="/register" element={<Register />} />
              <Route
                path="/login"
                element={
                  <LoginLogout
                    loggedIn={loggedIn}
                    setLoggedIn={setLoggedIn}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                  />
                }
              />
              <Route path="/" element={<Home username={username}/>} />
            </>
          )}
        </Routes>
      </>
    </div>
  );
};

export default App;
