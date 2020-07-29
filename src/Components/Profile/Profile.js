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
            <ProfileInfo profile={props.profile}/>
            <ProfilePostsContainer />
        </>
    )
}

export default Profile