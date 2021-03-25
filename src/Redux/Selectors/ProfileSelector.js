export const getPostsFromState = (state) => {
    return state.ProfileSlice.posts
}

export const getProfileFromState = (state) => {
    return state.ProfileSlice.profile
}

export const getProfileStatusFromState = (state) => {
    return state.ProfileSlice.profileStatus
}