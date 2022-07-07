import React, { useState } from 'react';
import {Header} from './';
import {LoginPerson} from '../api/index.js'

import './LoginLogout.css'

const LoginLogut = ({loggedIn, setLoggedIn}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleOnChange = (event) => {
        const input = event.target.id
        if (input === "username") {
            setUsername(event.target.value)
        } else {
            setPassword(event.target.value)
        }
    }

    async function handleSubmit (event){
        event.preventDefault() 
        console.log(event)
        const token = await LoginPerson(event)
        token ? setLoggedIn(true) : false
        localStorage.setItem("token", token)
    }
    
    return  (<>
        <div id="LoginBoxCenter">
        <div id="LoginBox">
        <div>
            <h1>
                Log In To Your Stranger's Things Account
            </h1>
        </div>
        <form onSubmit ={handleSubmit}>
        <div>
            <input id="Username" placeholder="Username"></input>
        </div>
        <div>
            <input id="Password" placeholder="Password"></input>
        </div>
        <button type="Submit">LOGIN</button>
        </form>
        </div>
        </div>
        </>)

} 

export default LoginLogut