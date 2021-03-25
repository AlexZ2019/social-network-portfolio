export const getMessagesFromState = (state) => {
    return state.AllUsersChatReducer.messages
}

export const getWsStatusFromState = (state) => {
    return state.AllUsersChatReducer.wsStatus
}