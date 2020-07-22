import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {

    return <>
        <div className={ ""}>
            <ul>
                <li>
                    <NavLink to={"/news"}>
                        News
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/profile"}>
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/dialogs"}>
                        Dialogs
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/users"}>
                        Users
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/settings"}>
                        Settings
                    </NavLink>
                </li>
            </ul>
        </div>
    </>
}

export default Menu