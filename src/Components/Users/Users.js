import React from "react";
import User from "./User";
import s from "./Users.module.css";


const Users = (props) => {
    return <div className={s["users"] + " col-8"}>
        {props.users.map(user => <User key={user.id}
                                       user={user}
                                       isSubscribed={props.isSubscribed}
                                       subscribeUser={props.subscribeUser}
                                       unSubscribeUser={props.unSubscribeUser}
                                       inProcess={props.inProcess}
        />)}
    </div>
}

export default Users;