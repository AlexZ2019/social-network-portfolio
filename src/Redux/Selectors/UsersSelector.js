export const getUsersFromState = (state) => {
    return state.UsersReducer.users
}

export const getSubscribed = (state) => {
    return state.UsersReducer.isSubscribed
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

export const getPortionPageSize = (state) => {
    return state.UsersReducer.portionPageSize
}
