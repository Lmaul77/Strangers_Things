import React, { useEffect } from "react";
import {
    useNavigate,
  } from "react-router-dom";


const Logout = ({setLoggedIn}) =>{
    const navigate = useNavigate()
    useEffect(() => { 
        setLoggedIn(false)
        navigate('/')
    })
    // setLoggedIn(false)
    // localStorage.removeItem('token');
    return(
    <div>
        <h1 id="logoutmessage">You Are Logged Out!</h1>
        </div>
        )
}
export default Logout;