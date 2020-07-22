import React from "react";
import {Field, reduxForm} from "redux-form";

const ProfilePosts = ({posts}) => {

    const NewPostForm = ({handleSubmit}) => {
        return (
            <form onSubmit={handleSubmit}>
                <Field name="newPost" type="text" placehplder="Add a new post" component="input" />
                <button>
                    Add a new post
                </button>
            </form>
        )
    }
    const NewPostFormRedux = reduxForm({
        form: 'AddNewPostForm'
    })(NewPostForm)

    return (
        <>
          <NewPostFormRedux />
          <div>
              {posts.map(post => <div key={post.postId}>
                  {post.postBody}
              </div>)}
          </div>
        </>
    )
}

export default ProfilePosts