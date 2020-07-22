import {reset} from "redux-form";

const ADD_POST = "src/Redux/Reducers/ProfileReducer/ADD_POST"

let initialState = {
    posts: [
        {postId: 1, postBody: "hey", postData: "22.07.2020", postTime: "12:51"},
        {postId: 2, postBody: "post 2", postData: "22.07.2020", postTime: "12:51"},
        {postId: 3, postBody: "post 3", postData: "22.07.2020", postTime: "12:51"},
        {postId: 4, postBody: "post 4", postData: "22.07.2020", postTime: "12:51"},
        {postId: 5, postBody: "post 5", postData: "22.07.2020", postTime: "12:51"},
        {postId: 6, postBody: "post 6", postData: "22.07.2020", postTime: "12:51"},
        {postId: 7, postBody: "post 7", postData: "22.07.2020", postTime: "12:51"},
        {postId: 8, postBody: "post 8", postData: "22.07.2020", postTime: "12:51"},
        {postId: 9, postBody: "post 9", postData: "22.07.2020", postTime: "12:51"},
        {postId: 10, postBody: "post 10", postData: "22.07.2020", postTime: "12:51"}

    ]
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state, posts: [...state.posts, action.newPost]
            }
        }
        default:
            return state
    }
}

// Action creators
export const addPostSuccess = (newPost) => {
    return (
        {type: ADD_POST, newPost}
    )
}

//Thunk creators
export const addPost = (newPost) => dispatch => {
    dispatch(addPostSuccess(newPost))
    dispatch(reset('addNewPostForm'))
}
export default ProfileReducer