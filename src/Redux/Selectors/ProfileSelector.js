export const getPostsFromState = (state) => {
    return state.ProfileReducer.posts
}

export const getProfileFromState = (state) => {
    return state.ProfileReducer.profile
}

export const getProfileStatusFromState = (state) => {
    return state.ProfileReducer.profileStatus
}