import {UsersApI} from "../../API/API";

const GET_USERS = "src/Redux/Reducers/UsersReducer/GET_USERS";
const SET_TOTAL_USERS_COUNT = "src/Redux/Reducers/UsersReducer/SET_TOTAL_USERS_COUNT";
const IS_FETCHING = "src/Redux/Reducers/IsFetchingReducer/IS_FETCHING";
const SUBSCRIBE = "src/Redux/Reducers/UsersReducer/SUBSCRIBE";
const UNSUBSCRIBE = "src/Redux/Reducers/UsersReducer/UNSUBSCRIBE";
const TOGGLE_IN_PROCESS = "src/Redux/Reducers/UsersReducer/TOGGLE_IN_PROCESS";
const SET_FILTER = "src/Redux/Reducers/UsersReducer/SET_FILTER";
const SET_CURRENT_PAGE = "src/Redux/Reducers/UsersReducer/SET_CurrentPage";

let initialState = {
    users: [],
    totalUsersCount: null,
    pageSize: 20,
    currentPage: 1,
    portionPageSize: 10,
    isSubscribed: false,
    isFetching: false,
    inProcess: [],
    filter: {
        term: ""
    }
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
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case TOGGLE_IN_PROCESS:
            return {
                ...state, inProcess: action.inProcess
                ? [...state.inProcess, action.userId]
                : state.inProcess.filter(id => id !== action.userId)
            }
        case SET_FILTER:
            return {
              ...state, filter: action.filter
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
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

const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    }
}

const isFetching = (isFetching) => {
    return {type: IS_FETCHING, isFetching}
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

const toggleInProcess = (inProcess, userId) => {
    return {
        type: TOGGLE_IN_PROCESS,
        inProcess,
        userId
    }
}

const setSearchFilter = (filter) => {
    return {
        type: SET_FILTER,
        filter
    }
}

// Thunk creator
export const getUsers = (currentPage, pageSize, filter) => async dispatch => {

    dispatch(isFetching(true));
    dispatch(setCurrentPage(currentPage));
    dispatch(setSearchFilter(filter));
    let data = await UsersApI.getUsersRequest(currentPage, pageSize, filter.term, filter.friend);
    dispatch(isFetching(false));
    dispatch(getUsersSuccess(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
}

const subscribeUnsubscribe = (userId, ApiMethod, action) => async dispatch => {
    dispatch(toggleInProcess(true, userId));
    let data = await ApiMethod(userId);
    dispatch(toggleInProcess(false, userId));
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