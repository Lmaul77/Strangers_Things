import React, { useState, useEffect } from 'react';
import {Route, Routes, Router, Navigate} from 'react-router-dom'
import {Header, LoginLogout, Posts, Profile, Register, AddUserPosts, Home, Logout, EditUserPosts} from './';

import './App.css'

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [titleInput, setTitleInput] =useState("")
    const [descriptionInput, setDescriptionInput] = useState("")
    const [priceInput, setPriceInput] = useState("")
    const [authorInput, setAuthorInput] = useState("")
    const [locationInput, setLocationInput] = useState("")
    const [checkbox, setCheckbox] = useState("unchecked")

    return(
        <div> 
        <Header loggedIn={loggedIn}/>
        <>
        <Routes>
            {loggedIn ?
            <>
            <Route path="/posts" element={<Posts titleInput={titleInput} setTitleInput={setTitleInput} descriptionInput={descriptionInput} setDescriptionInput={setDescriptionInput} priceInput={priceInput} setPriceInput={setPriceInput} authorInput={authorInput} setAuthorInput={setAuthorInput} locationInput={locationInput} setLocationInput={setLocationInput} />} />
            <Route path="/" element={<Home/>}/>
            <Route path="/adduserposts" element={<AddUserPosts checkbox={checkbox} setCheckbox={setCheckbox} titleInput={titleInput} setTitleInput={setTitleInput} descriptionInput={descriptionInput} setDescriptionInput={setDescriptionInput} priceInput={priceInput} setPriceInput={setPriceInput} authorInput={authorInput} setAuthorInput={setAuthorInput} locationInput={locationInput} setLocationInput={setLocationInput}/>} />
            <Route path="/edituserposts" element={<EditUserPosts checkbox={checkbox} setCheckbox={setCheckbox} titleInput={titleInput} setTitleInput={setTitleInput} descriptionInput={descriptionInput} setDescriptionInput={setDescriptionInput} priceInput={priceInput} setPriceInput={setPriceInput} authorInput={authorInput} setAuthorInput={setAuthorInput} locationInput={locationInput} setLocationInput={setLocationInput}/>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn}/>}
            />
            </>
            : 
            <>
            <Route path="/posts" element={<Posts titleInput={titleInput} setTitleInput={setTitleInput} descriptionInput={descriptionInput} setDescriptionInput={setDescriptionInput} priceInput={priceInput} setPriceInput={setPriceInput} authorInput={authorInput} setAuthorInput={setAuthorInput} locationInput={locationInput} setLocationInput={setLocationInput} />} />
            <Route path="/register" element={<Register />} />    
            <Route path="/login" element={<LoginLogout  loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/" element={<Home/>}/>
            </>}
        </Routes>
        </>
        </div>
    )
}

export default App