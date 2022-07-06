import React from 'react';
import {Header} from './';

import './LoginLogout.css'

const LoginLogut = () => {
    return  (<>
        <Header />
        <div id="LoginBoxCenter">
        <div id="LoginBox">
        <div>
            <h1>
                Log In to Your Stranger's Things Account
            </h1>
        </div>
        <form onSubmit ={"handleSubmit"}>
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