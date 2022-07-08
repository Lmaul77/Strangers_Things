import React, { useState, useEffect } from 'react';
import {Route, Routes, Router, Navigate} from 'react-router-dom'
import {Header, LoginLogout, Posts, Profile, Register, AddUserPosts, Home, Logout} from './';

import './App.css'

const App = () => {
    const [loggedIn, setLoggedIn] = useState(false)

    return(
        <div> 
        <Header loggedIn={loggedIn}/>
        <>
        <Routes>
            {loggedIn ?
            <>
            <Route path="/posts" element={<Posts />} />
            <Route path="/" element={<Home/>}/>
            <Route path="/adduserposts" element={<AddUserPosts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout setLoggedIn={setLoggedIn}/>} />
            </>
            : 
            <>
            <Route path="/posts" element={<Posts />} />
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