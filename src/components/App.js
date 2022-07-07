import React from 'react';
import {Route, Routes, Router, Navigate} from 'react-router-dom'
import {Header, LoginLogout, Posts, Profile, Register, AddUserPosts} from './';

import './App.css'

const App = () => {
    return(
        <div> 
        <Header />
        <>
        <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<LoginLogout />} />
            <Route path="/adduserposts" element={<AddUserPosts />} />
            {/* <Route exact path="/">

            </Route> */}
        </Routes>
        </>
        </div>
        
    )
}

export default App