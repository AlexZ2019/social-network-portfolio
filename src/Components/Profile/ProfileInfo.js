import React from "react";
import defaultAvatar from "../../files/images/User_Avatar.png"
import ProfileInfoStatus from "./ProfileInfoStatus";
import ProfilePostsContainer from "./Posts/ProfilePostsContainer";

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar} alt=""/>
            </div>
            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>
            <ProfileInfoStatus profileStatus={props.profileStatus}
                               updateProfileStatus={props.updateProfileStatus}/>
        </div>
    )
}

export default ProfileInfo