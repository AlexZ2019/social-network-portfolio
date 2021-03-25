import {allUsersChatApI} from "../../API/allUsersChatApI";

const GET_MESSAGES = "src/Redux/Reducers/AllUsersChat?Reducer/GET_MESSAGES";
const SET_WS_STATUS =  "src/Redux/Reducers/AllUsersChat?Reducer/SET_WS_STATUS";

let InitialState = {
    messages: [],
    wsStatus: ""
}

const AllUsersChatReducer = (state = InitialState, action) => {

    switch (action.type) {
        case GET_MESSAGES:
            return {
                ...state, messages: [...state.messages, ...action.messages]
            }
        case SET_WS_STATUS:
            return {
                ...state, wsStatus: action.wsStatus
            }
        default: return state
    }
}

// Action creators

const setMessage = (messages) => {
    return {
        type: GET_MESSAGES,
        messages
    }
}

const setWsStatus = (status) => {
    return {
        type: SET_WS_STATUS,
        status
    }
}

const newMessageHandlerCreator = (dispatch) => {
    return (newMessages) => {
        dispatch(setMessage(newMessages))
    }
}

const newStatusHandlerCreator = (dispatch) => {
    return (newStatus) => {
        dispatch(setWsStatus(newStatus))
    }
}

export const getMessages = () => async dispatch => {
    allUsersChatApI.start();
    allUsersChatApI.subscribe("messages", newMessageHandlerCreator(dispatch));
    allUsersChatApI.subscribe("status", newStatusHandlerCreator(dispatch));
}

export const sendMessage = (message) => async dispatch => {
    allUsersChatApI.sendMessage(message)
}

export default AllUsersChatReducer;