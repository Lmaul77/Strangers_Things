import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom'
import {Header, LoginLogout, Posts, Profile, Register} from './';

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
            {/* <Route exact path="/">

            </Route> */}
        </Routes>
        </>
        </div>
        
    )
}

export default App