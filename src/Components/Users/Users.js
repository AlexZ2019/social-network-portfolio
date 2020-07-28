import React from "react";
import User from "./User";
import s from "./Users.css"
import Pagination from "../Common/Pagination/Pagination";


const Users = (props) => {
    return <div className={s["users"] + " col-8"}>
        {props.users.map(user => <User key={user.id}
                                       user={user}
                                       subscribed={props.subscribed}
        />)}
        <Pagination {...props}/>
    </div>
}

export default Users