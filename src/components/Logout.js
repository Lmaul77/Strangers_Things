import React from "react";


const Logout = ({setLoggedIn}) =>{
    setLoggedIn(false)
    localStorage.removeItem('token');
    return(
    <div>
        <h1 id="logoutmessage">You Are Logged Out!</h1>
        </div>
        )
}
export default Logout;