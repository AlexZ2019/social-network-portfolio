import React from "react";

const Post = (props) => {
    return <div>
        <img src="" alt=""/>
        {props.item.post}
        <button onClick={() => props.deletePost(props.item.postId)}>
            Delete Post
        </button>
    </div>

}

export default Post