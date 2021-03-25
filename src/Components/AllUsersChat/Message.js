import React from "react";

export const Message = ({message}) => {

    return <div>
        <img src={message.photo} style={{width: "30px"}} alt=""/> <b>{message.userName}</b>
        <br/>
        {message.message}
        <hr/>
    </div>
}