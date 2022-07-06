import React from 'react';

import './Register.css'

const Register = () => {
    return  (<>
        <div id="RegisterBoxCenter">
        <div id="RegisterBox">
        <div>
            <h1>
                Create Your New Stranger's Things Account
            </h1>
        </div>
        <form onSubmit ={"handleSubmit"}>
        <div>
            <input id="Username" placeholder="Username"></input>
        </div>
        <div>
            <input id="Password" placeholder="Password"></input>
        </div>
        <button type="Submit">REGISTER</button>
        </form>
        </div>
        </div>
        </>)
} 

export default Register