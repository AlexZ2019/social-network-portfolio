export const getUsersFromState = (state) => {
    return state.UsersReducer.users
}

export const getSubscribed = (state) => {
    return state.UsersReducer.subscribed
}

export const getTotalUserCount = (state) => {
    return state.UsersReducer.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.UsersReducer.currentPage
}

export const getPageSize = (state) => {
    return state.UsersReducer.pageSize
}

export const getPortionPagesSize = (state) => {
    return state.UsersReducer.portionPagesSize
}
