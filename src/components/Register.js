import React from 'react';
import {RegisterPerson} from '../api/index.js'

import './Register.css'

async function handleSubmit (event){
    event.preventDefault() 
    RegisterPerson(event)
}

const Register = () => {
    return  (<>
        <div id="RegisterBoxCenter">
        <div id="RegisterBox">
        <div>
            <h1 id="RegisterMessage">
                Create Your New Stranger's Things Account
            </h1>
        </div>
        <form onSubmit ={handleSubmit}>
        <div>
            <input id="RUsername" placeholder="Username"></input>
        </div>
        <div>
            <input id="RPassword" placeholder="Password"></input>
        </div>
        <button type="Submit">REGISTER</button>
        </form>
        </div>
        </div>
        </>)
} 

export default Register