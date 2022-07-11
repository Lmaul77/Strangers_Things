import React from 'react'

const messagesFrom = ({profileInfo}) =>{
    console.log(profileInfo)
    // const contentInfo = profileInfo.messages
return (
    <div>
   {profileInfo.data ? profileInfo.data.messages.map((content)=>{
    console.log(content);
   return (<div>
    <div>
        <h3>User:</h3>
    {content.fromUser.username}
    </div><div>
    <h3>Re: Post:</h3>
    {content.post.title}
    </div><div>
    <h3>Message:</h3>
    {content.content}
    </div>
    </div>);
   }): null} 
   </div>
)
}

export default messagesFrom