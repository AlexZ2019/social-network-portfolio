import React from "react";
import {NavLink} from "react-router-dom";
import defaultAvatar from "../../files/images/User_Avatar.png"

const User = ({user}) => {
    return <div key={user.id}>
        {/*<NavLink to={'/profile/'}>*/}
        {/*    <img src={user.photos.small !== null ? user.photos.small : defaultAvatar} alt=""/>*/}
        {/*</NavLink>*/}
        <span>
            {user.name}
        </span>
        <span>
            {user.status}
        </span>
    </div>
}

export default User