import {UsersApI} from "../../API/API";
import {isFetching} from "./IsFetchingReducer";

const GET_USERS = "src/Redux/Reducers/UsersReducer/GET_USERS"
const SET_TOTAL_USERS_COUNT = "src/Redux/Reducers/UsersReducer/SET_TOTAL_USERS_COUNT"

let initialState = {
    users: [],
    totalUsersCount: null,
    subscribed: false,
}

const UserReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,totalUsersCount: action.totalUsersCount
            }
        default: return state
    }
}

// Action creators
const getUsersSuccess = (users) => {
    return {
        type: GET_USERS,
        users
    }
}

const setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    }
}


// Thunk creator
export const getUsers = () => async dispatch => {
    dispatch(isFetching(true))
    let data = await UsersApI.getUsersRequest()
    dispatch(isFetching(false))
    dispatch(getUsersSuccess(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export default UserReducer