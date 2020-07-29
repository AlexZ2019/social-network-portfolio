import React from "react";
import defaultAvatar from "../../files/images/User_Avatar.png"

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar} alt=""/>
            </div>
            <div>{props.profile.fullName}</div>
            <div>profile.aboutMe</div>
        </div>
    )
}

export default ProfileInfo