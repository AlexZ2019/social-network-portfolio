import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = (props) => {
    return <div className={"col-12"}>
        <div>
            {props.isAuth ? props.login : <NavLink to={"/login"}>login</NavLink>}
        </div>
    </div>
}

export default Navigation