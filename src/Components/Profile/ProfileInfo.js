import React from "react";
import defaultAvatar from "../../files/images/User_Avatar.png"
import ProfileInfoStatus from "./ProfileInfoStatus";

const ProfileInfo = React.memo(props => {

    return (
        <div>
            <div>{props.profile.fullName}</div>
            <div>
                <img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar} alt=""/>
            </div>
            <div>Change a photo <input type="file" onChange={props.getNewPhoto}/></div>
            <div>{props.profile.aboutMe}</div>
            <ProfileInfoStatus profileStatus={props.profileStatus}
                               updateProfileStatus={props.updateProfileStatus}/>
        </div>
    )
}
)
export default ProfileInfo