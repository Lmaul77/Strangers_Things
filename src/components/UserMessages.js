import React from 'react';

import './UserMessages.css'

const UserMessages = ({myReturnedInfo}) => {
    if (myReturnedInfo && myReturnedInfo.length) {
       const Usermap = myReturnedInfo.map((element) => {
            return (
                console.log(myReturnedInfo)
            )
        })
} 
}

export default UserMessages