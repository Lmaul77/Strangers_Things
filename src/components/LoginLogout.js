import React, { useState } from 'react';
import {Header} from './';
import {LoginPerson} from '../api/index.js'
import {
    useNavigate,
  } from "react-router-dom";

import './LoginLogout.css'

const LoginLogut = ({loggedIn, setLoggedIn, username, setUsername, password, setPassword}) => {
    const navigate = useNavigate()

    // const handleOnChange = (event) => {
    //     const input = event.target.id
    //     if (input === "username") {
    //         setUsername(event.target.value)
    //     } else {
    //         setPassword(event.target.value)
    //     }
    // }

    async function handleSubmit (event){
        event.preventDefault() 
        const loginUsername = event.target[0].value;
        console.log(loginUsername)
        const input = event.target.id
        const token = await LoginPerson(event)
        if (token)  {setLoggedIn(true)
        localStorage.setItem("token", token)
        localStorage.setItem("username", loginUsername)
        setUsername(loginUsername)
         }
        
        // if (input === "username") {
        //     setUsername(event.target.value)
        // } else {
        //     setPassword(event.target.value)
        // }
        navigate('/profile')
    }
    
    return  (<>
        <div id="LoginBoxCenter">
        <div id="LoginBox">
        <div>
            <h1 id="LoginHeader">
                Log In To Your Stranger's Things Account
            </h1>
        </div>
        <form onSubmit ={handleSubmit}>
        <div>
            <input id="HUsername" placeholder="Username"></input>
        </div>
        <div>
            <input id="HPassword" placeholder="Password"></input>
        </div>
        <button type="Submit">LOGIN</button>
        </form>
        </div>
        </div>
        </>)

} 

export default LoginLogut