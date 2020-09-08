import {UsersApI} from "../../API/API";
import {isFetching} from "./IsFetchingReducer";

const GET_USERS = "src/Redux/Reducers/UsersReducer/GET_USERS";
const SET_TOTAL_USERS_COUNT = "src/Redux/Reducers/UsersReducer/SET_TOTAL_USERS_COUNT";
const SUBSCRIBE = "src/Redux/Reducers/UsersReducer/SUBSCRIBE";
const UNSUBSCRIBE = "src/Redux/Reducers/UsersReducer/UNSUBSCRIBE";
const TOGGLE_IN_PROCESS = "src/Redux/Reducers/UsersReducer/TOGGLE_IN_PROCESS";

let initialState = {
    users: [],
    totalUsersCount: null,
    pageSize: 20,
    currentPage: 1,
    portionPageSize: 10,
    isSubscribed: false,
    inProcess: false
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
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
        case TOGGLE_IN_PROCESS:
            return {
                ...state, inProcess: action.inProcess
            }

        default:
            return state
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

const toggleInProcess = (inProcess) => {
    return {
        type: TOGGLE_IN_PROCESS,
        inProcess
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

const subscribeUnsubscribe = (userId, ApiMethod, action) => async dispatch => {
    dispatch(toggleInProcess(true));
    let data = await ApiMethod(userId);
    dispatch(toggleInProcess(false));
    if (data.resultCode === 0) {
        dispatch(action(userId));
    }
}

export const getSubscribe = (userId) => async dispatch => {
    dispatch(subscribeUnsubscribe(userId, UsersApI.getSubscribed, getSubscribeSuccess))
}

export const getUnsubscribe = (userId) => async dispatch => {
    dispatch(subscribeUnsubscribe(userId, UsersApI.getUnsubscribed, getUnSubscribeSuccess))
}

export default UserReducer;