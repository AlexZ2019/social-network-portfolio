import React, {useState} from "react";

const ProfileInfoStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)

    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }

    let onProfileStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {!editMode ? <span onDoubleClick={activateEditMode}>{props.profileStatus || "status is absent"}</span>
            : <input type="text" value={status} onChange={onProfileStatusChange} autoFocus={true} onBlur={deactivateEditMode}/>}
    </div>
}

export default ProfileInfoStatus

