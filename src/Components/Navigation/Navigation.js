import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = (props) => {
    return <div className={"col-12"}>
        <div>
            {props.isAuth ? <div>
                {props.login} <button onClick={props.getLogout}>logout</button>
            </div> : <NavLink to={"/login"}>login</NavLink>}
        </div>
    </div>
}

export default Navigation