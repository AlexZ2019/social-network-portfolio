export const getPostsFromState = (state) => {
    return state.ProfileReducer.posts
}

export const getProfileFromState = (state) => {
    console.log(state.ProfileReducer.profile)
    return state.ProfileReducer.profile
}