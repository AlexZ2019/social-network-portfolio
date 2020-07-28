export const getUsersFromState = (state) => {
    return state.UsersReducer.users
}

export const getSubscribed = (state) => {
    return state.UsersReducer.subscribed
}

