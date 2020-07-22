import React from "react";
import ProfileInfo from "./ProfileInfo";
import ProfilePosts from "./ProfilePosts";

const Profile = ({posts}, {...props}) => {

    return (
        <>
            <ProfileInfo />
            <ProfilePosts posts={posts}/>
        </>
    )
}

export default Profile