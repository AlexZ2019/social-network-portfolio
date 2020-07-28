import React from "react";
import User from "./User";
import s from "./Users.css"

const Users = (props) => {
    return <div className={s["users"] + " col-8"}>
        {props.users.map(user => <User key={user.id}
                                       user={user}
                                       subscribed={props.subscribed}
        />)}
    </div>
}

export default Users