import React from "react";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../files/images/User_Avatar.png"
import s from "./Users.css"

const User = ({user}, {...props}) => {
    return <div className={s["user"]} key={user.id}>
        <NavLink to={'/profile/'}>
            <img src={user.photos.small !== null ? user.photos.small : defaultAvatar} alt=""/>
        </NavLink>
        <span>
            {user.name}
        </span>
        <span>
            {user.status}
        </span>
        {props.subscribed ? <button>unsubscribe</button> : <button>subscribe</button>}
    </div>
}

export default User