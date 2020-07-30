import React from "react";
import {Field, reduxForm} from "redux-form";
import Post from "./Post";

const NewPostForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={"newPost"} component={"input"} placeholder="Add a new post"/>
            <button>
                Add a new post
            </button>
        </form>
    )
}

const NewPostFormRedux = reduxForm({
    form: 'addNewPostForm'
})(NewPostForm)

let ProfilePosts = (props) => {

    return (
        <div className={"col-8"}>
            <NewPostFormRedux onSubmit={props.onPostSubmit}/>
            {props.posts.map(item => <Post deletePost={props.deletePost}
                item={item}
                key={item.postId}/>)}
        </div>
    )
}

export default ProfilePosts