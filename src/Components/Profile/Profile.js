import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePostsContainer from "./Posts/ProfilePostsContainer";
import Preloader from "../Common/Preloader/Preloader";


const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <>
            <ProfileInfo profile={props.profile}
                         profileStatus={props.profileStatus}
                         updateProfileStatus={props.updateProfileStatus}
                         getNewPhoto={props.getNewPhoto}
                         isOwner={props.isOwner}
                         changeProfileData={props.changeProfileData}
                         saveNewPhoto={props.saveNewPhoto}
                         saveProfile={props.saveProfile}
            />
            <ProfilePostsContainer/>
        </>
    )
}

export default Profile