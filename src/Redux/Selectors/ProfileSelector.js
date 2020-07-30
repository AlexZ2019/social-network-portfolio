export const getPostsFromState = (state) => {
    return state.ProfileReducer.posts
}

export const getProfileFromState = (state) => {
    return state.ProfileReducer.profile
}