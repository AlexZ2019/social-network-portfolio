import React, {useState} from "react";
import defaultAvatar from "../../files/images/User_Avatar.png"
import ProfileInfoStatus from "./ProfileInfoStatus";
import {Field, reduxForm} from "redux-form";

const ProfileData = (props) => {
    return <div>
        <div>{props.profile.fullName}</div>
        <div>
            <img src={props.profile.photos.large ? props.profile.photos.large : defaultAvatar} alt="profileData"/>
        </div>
        <div>
            {props.isOwner && <button onClick={props.activeEditMode}>Edit profile</button>}
        </div>
        {/*{props.isOwner && <div>Change a photo <input type="file" onChange={props.getNewPhoto}/></div>}*/}
        <div>{props.profile.aboutMe}</div>
    </div>
}

const ProfileDataEditForm = ({handleSubmit, ...props}) => {
    return <form onSubmit={handleSubmit}>
        <div><Field name={"fullName"} component={"input"}/></div>
        <div>
            <img src={props.photos.large ? props.photos.large : defaultAvatar} alt="profilePhoto"/>
            <div>Change a photo <input type="file" onChange={props.getNewPhoto}/></div>
        </div>
        {/*{props.isOwner && <div>Change a photo <input type="file" onChange={props.getNewPhoto}/></div>}*/}
        <div><Field name={"aboutMe"} component={"input"}/></div>
        <button>Save</button>
    </form>
}

const ProfileDataEditFormRedux = reduxForm({
    form: "profileDataForm"
})(ProfileDataEditForm)

const ProfileInfo = React.memo(props => {

    let [editMode, setEditMode] = useState(false)

    const getNewPhoto = (e) => {
        if (e.target.files.length) {
            props.saveNewPhoto(e.target.files[0])
        }
    }

    const changeProfileData = (profileData) => {
        props.saveProfile(profileData).then(
            deactivateEditMode()
        )
    }

    const deactivateEditMode = () => {
        setEditMode(false)
    }

    const activateEditMode = () => {
        setEditMode(true)
    }

    return (
        <React.Fragment>
            {editMode
                ? <ProfileDataEditFormRedux initialValues={props.profile}
                                            onSubmit={changeProfileData}
                                            photos={props.profile.photos}
                                            getNewPhoto={getNewPhoto}
                />
                : <ProfileData activeEditMode={activateEditMode}
                               {...props}/>
            }
            <ProfileInfoStatus profileStatus={props.profileStatus}
                               updateProfileStatus={props.updateProfileStatus}/>
        </React.Fragment>
        )
    }
)
export default ProfileInfo