import React from "react";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../files/images/User_Avatar.png";
import s from "./Users.module.css";

const User = ({user, ...props}) => {
    return <div className={s["user"]} key={user.id}>
        <NavLink to={"/profile/" + user.id}>
            <img src={user.photos.small !== null ? user.photos.small : defaultAvatar} alt=""/>
        </NavLink>
        <span>
            {user.name}
        </span>
        <span>
            {user.status}
        </span>
        {user.followed
            ? <button disabled={props.inProcess} onClick={() => props.unSubscribeUser(user.id)}>unsubscribe</button>
            : <button disabled={props.inProcess} onClick={() => props.subscribeUser(user.id)}>subscribe</button>
        }
    </div>
}

export default User;