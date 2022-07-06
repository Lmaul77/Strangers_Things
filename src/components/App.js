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
            <Route path="/posts">
                <Posts />
            </Route>
            <Route path="/profile">
                <Profile />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
            <Route path="/login">
                <LoginLogout />
            </Route>
        </Routes>
        </>
        <>
        <Routes>
            <Route exact path="/">

            </Route>
            <Navigate to="/"/>
        </Routes>
        </>
        </div>
        
    )
}

export default App