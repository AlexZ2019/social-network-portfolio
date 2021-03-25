export const getMessagesFromState = (state) => {
    return state.AllUsersChatSlice.messages
}

export const getWsStatusFromState = (state) => {
    return state.AllUsersChatSlice.wsStatus
}