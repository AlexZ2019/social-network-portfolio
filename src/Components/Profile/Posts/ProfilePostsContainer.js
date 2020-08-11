import React, {PureComponent} from "react";
import ProfilePosts from "./ProfilePosts";
import {connect} from "react-redux";
import {addPost, deletePost} from "../../../Redux/Reducers/ProfileReducer";
import {getPostsFromState} from "../../../Redux/Selectors/ProfileSelector";

class ProfilePostsContainer extends PureComponent{
    onPostSubmit = (values) => {
        this.props.addPost(values.newPost)
    }
    deletePost = (postId) => {
        this.props.deletePost(postId)
    }
    render() {
        return <ProfilePosts {...this.props} onPostSubmit={this.onPostSubmit}
                            deletePost={this.deletePost}
        />
    }
}
let mapStateToProps = (state) => {
    return {
        posts: getPostsFromState(state)
    }
}
export default connect(mapStateToProps, {addPost, deletePost})(ProfilePostsContainer)