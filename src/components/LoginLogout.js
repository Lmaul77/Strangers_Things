import React from 'react';
import {Header} from './';
import {LoginPerson} from '../api/index.js'

import './LoginLogout.css'

async function handleSubmit (event){
    event.preventDefault() 
    console.log(event)
    const token = await LoginPerson(event)
    localStorage.setItem("token", token)
}

const LoginLogut = () => {
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