import {reset} from "redux-form";
import {ProfileAPI} from "../../API/profileApI";
import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    posts: [
        {postId: 1, post: "hey", postData: "22.07.2020", postTime: "12:51"},
        {postId: 2, post: "post 2", postData: "22.07.2020", postTime: "12:51"},
        {postId: 3, post: "post 3", postData: "22.07.2020", postTime: "12:51"},
        {postId: 4, post: "post 4", postData: "22.07.2020", postTime: "12:51"},
        {postId: 5, post: "post 5", postData: "22.07.2020", postTime: "12:51"},
        {postId: 6, post: "post 6", postData: "22.07.2020", postTime: "12:51"},
        {postId: 7, post: "post 7", postData: "22.07.2020", postTime: "12:51"},
        {postId: 8, post: "post 8", postData: "22.07.2020", postTime: "12:51"},
        {postId: 9, post: "post 9", postData: "22.07.2020", postTime: "12:51"},
        {postId: 10, post: "post 10", postData: "22.07.2020", postTime: "12:51"}
    ],
    profile: null,
    profileStatus: null
}

const ProfileSlice = createSlice({
    name: "ProfileSlice",
    initialState,
    reducers: {
        addNewPost: (state, action) => {
            state.posts = [{postId: state.posts.length + 2,post: action.payload} ,...state.posts]
        },
        deletePostSuccess: (state, action) => {
            state.posts.filter(item => item.postId !== action.payload)
        },
        setProfile: (state, action) => {
            state.profile = action.payload
        },
        setProfileStatus: (state, action) => {
            state.profileStatus = action.payload
        },
        savePhotoSuccess: (state, action) => {
            state.profile = {...state.profile, photos: action.payload}
        }
    }

})

export const {addNewPost, deletePostSuccess, setProfile, setProfileStatus, savePhotoSuccess} = ProfileSlice.actions

//Thunk creators
export const addPost = newPost => dispatch => {
    dispatch(addNewPost(newPost));
    dispatch(reset("addNewPostForm"));
}

export const deletePost = postId => dispatch => {
    dispatch(deletePostSuccess(postId));
}

export const getProfile = userId => async dispatch => {
    let response = await ProfileAPI.getProfile(userId);
    dispatch(setProfile(response.data));
}

export const getProfileStatus = userId => async dispatch => {
    let response = await ProfileAPI.getProfileStatus(userId);
    dispatch(setProfileStatus(response.data));
}

export const updateProfileStatus = profileStatus => async dispatch => {
    let response = await ProfileAPI.updateProfileStatus(profileStatus);
    if (response.data.resultCode === 0) {
        dispatch(setProfileStatus(profileStatus));
    }
}

export const saveNewPhoto = photo => async dispatch => {
    let response = await ProfileAPI.changePhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = profileData => async (dispatch, getState) => {
    let userId = getState().AuthReducer.userId;
    let response = await ProfileAPI.saveProfileRequest(profileData);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId));
    }
}

export default ProfileSlice.reducer;