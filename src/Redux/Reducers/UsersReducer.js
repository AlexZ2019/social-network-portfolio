import {UsersApI} from "../../API/API";
import {isFetching} from "./IsFetchingReducer";

const GET_USERS = "src/Redux/Reducers/UsersReducer/GET_USERS";
const SET_TOTAL_USERS_COUNT = "src/Redux/Reducers/UsersReducer/SET_TOTAL_USERS_COUNT";
const SUBSCRIBE = "src/Redux/Reducers/UsersReducer/SUBSCRIBE";
const UNSUBSCRIBE = "src/Redux/Reducers/UsersReducer/UNSUBSCRIBE";

let initialState = {
    users: [],
    totalUsersCount: null,
    pageSize: 20,
    currentPage: 1,
    portionPageSize: 10,
    isSubscribed: false
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
        case SUBSCRIBE:
            return {
                ...state, users: state.users.map(u => {
                if (u.id === action.userId) {
                    return {...u, followed: true}
                }
                return u
                })
        }
        case UNSUBSCRIBE:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
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

const getSubscribeSuccess = (userId) => {
    return {
        type: SUBSCRIBE,
        userId
    }
}

const getUnSubscribeSuccess = (userId) => {
    return {
        type: UNSUBSCRIBE,
        userId
    }
}



// Thunk creator
export const getUsers = (currentPage, pageSize) => async dispatch => {
    dispatch(isFetching(true));
    let data = await UsersApI.getUsersRequest(currentPage, pageSize);
    dispatch(isFetching(false));
    dispatch(getUsersSuccess(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

export const getSubscribe = (userId) => async dispatch => {
    let data = await UsersApI.getSubscribed(userId);
    debugger
    if (data.resultCode === 0) {
        dispatch(getSubscribeSuccess(userId));
    }
}

export const getUnsubscribe = (userId) => async dispatch => {
    let data = await UsersApI.getUnsubscribed(userId);
    debugger
    if (data.resultCode === 0) {
        dispatch(getUnSubscribeSuccess(userId));
    }
}

export default UserReducer;