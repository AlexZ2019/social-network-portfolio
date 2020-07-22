import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePostsContainer from "./Posts/ProfilePostsContainer";

const Profile = (props) => {

    return (
        <>
            <ProfileInfo />
            <ProfilePostsContainer />
        </>
    )
}

export default Profile