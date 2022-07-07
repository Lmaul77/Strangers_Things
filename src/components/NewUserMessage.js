import React from 'react';

import './NewUserMessage.css'

const NewUserMessage = () => {
            return (
            <div>
                <div id="MessageHeader">
                <h1>Message User about This Post</h1>
                </div>
                <form onSubmit ={"handleSubmit"}>
                <div>
                <input id="Title" placeholder="Title"></input>
                </div>
                <div>
                    <input id="MessageBox" placeholder="Your Message Here"></input>
                </div>
                <button type="Submit">SEND MESSAGE</button>
                </form>
            </div>
            )
} 

export default NewUserMessage