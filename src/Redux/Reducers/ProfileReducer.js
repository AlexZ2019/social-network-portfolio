import {reset} from "redux-form";

const ADD_POST = "src/Redux/Reducers/ProfileReducer/ADD_POST"
const DELETE_POST = "src/Redux/Reducers/ProfileReducer/DELETE_POST"


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
    ]
}

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state, posts: [...state.posts, {postId: state.posts.length + 2,post: action.newPost}]
                // postId: state.posts.length + 2 is temporary. It needs to be refactored
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(item => item.postId !== action.postId)
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
export const deletePostSuccess = (postId) => {
    return (
        {type: DELETE_POST, postId}
    )
}

//Thunk creators
export const addPost = newPost => dispatch => {
    dispatch(addPostSuccess(newPost))
    dispatch(reset("addNewPostForm"))
}
export const deletePost = postId => dispatch => {
    dispatch(deletePostSuccess(postId))
}

export default ProfileReducer