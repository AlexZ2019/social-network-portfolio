import {AuthorizationApI} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_IS_AUTH = "src/Redux/Reducers/AuthReducer/SET_IS_AUTH"
const SET_AUTH_DATA = "src/Redux/Reducers/AuthReducer/SET_AUTH_DATA"

let initialState = {
    isAuth: false,
    userId: null,
    login: null,
    email:null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {
                ...state, isAuth: action.isAuth
            }
        case SET_AUTH_DATA:
            return {
                ...state, ...action.payload
            }
        default:
            return state
    }
}

// Action Creators
const setIsAuth = (isAuth) => {
    return {
        type: SET_IS_AUTH,
        isAuth
    }
}

const setAuthData = (userId, email, login) => {
    // console.log(userId, email, login)
    return {
        type: SET_AUTH_DATA,
        payload: {userId, email, login}
    }
}

// Thunk creators
export const getAuth = () => async dispatch => {
    let response = await AuthorizationApI.getAuthMe()
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setIsAuth(true))
        dispatch(setAuthData(id, email, login))
    }
}

export const getLogin = (email, password, rememberMe) => async dispatch => {
    let response = await AuthorizationApI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit("loginForm", {_error: message}))
    }
}

export const getLogout = () => async dispatch => {
    let response = await AuthorizationApI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null))
    }
}
export default AuthReducer