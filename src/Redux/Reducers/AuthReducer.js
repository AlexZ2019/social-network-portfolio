import {AuthorizationApI, securityAPi} from "../../API/API";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = "src/Redux/Reducers/AuthReducer/SET_AUTH_DATA";
const GET_CAPTCHA = "src/Redux/Reducers/AuthReducer/GET_CAPTCHA";

let initialState = {
    isAuth: false,
    userId: null,
    login: null,
    email: null,
    captcha: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_DATA:
            return {
                ...state, ...action.payload
            }
        case GET_CAPTCHA:
            return {
                ...state, captcha: action.url
            }
        default:
            return state
    }
}

// Action Creators

const setAuthData = (userId, email, login, isAuth) => {
    return {
        type: SET_AUTH_DATA,
        payload: {userId, email, login, isAuth}
    }
}

const setCaptcha = (url) => {
    return {
        type: GET_CAPTCHA,
        url
    }
}

// Thunk creators
export const getAuth = () => async dispatch => {
    let response = await AuthorizationApI.getAuthMe();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthData(id, email, login, true));
    }
}

export const getLogin = (email, password, rememberMe, captcha = null) => async dispatch => {
    let response = await AuthorizationApI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuth());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
        dispatch(stopSubmit("loginForm", {_error: message}));
    }
}

export const getLogout = () => async dispatch => {
    let response = await AuthorizationApI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
    }
}

export const getCaptcha = () => async dispatch => {
    let response = await securityAPi.getCaptcha();
    dispatch(setCaptcha(response.data.url));
}

export default AuthReducer;