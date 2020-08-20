const IS_FETCHING = "src/Redux/Reducers/IsFetchingReducer/IS_FETCHING";

let initialState = {
    isFetching: false
}

const IsFetchingReducer = (state= initialState, action) => {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state.isFetching, isFetching: action.isFetching
            }
        default: return state
    }
}
export const isFetching = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
}

export default IsFetchingReducer;