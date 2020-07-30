export const getIsAuthFromState = (state) => {
    return state.AuthReducer.isAuth
}

export const getAuthUserIdFromState = (state) => {
    return state.AuthReducer.userId
}

export const getAuthEmailFromState = (state) => {
    return state.AuthReducer.email
}

export const getAuthLoginFromState = (state) => {
    return state.AuthReducer.login
}
