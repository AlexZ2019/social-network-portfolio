import {allUsersChatApI} from "../../API/allUsersChatApI";
import {createSlice} from "@reduxjs/toolkit";

let initialState = {
    messages: [],
    wsStatus: ""
}

const AllUsersChatSlice = createSlice({
    name: "AllUsersChatSlice",
    initialState,
    reducers: {
        getMessages: (state, action) => {
            state.messages = [...state.messages, ...action.payload]
        },
        setWsStatus: (state, action) =>  {
            state.wsStatus = action.payload
        }
    }
})

export const {getMessages, setWsStatus} = AllUsersChatSlice.actions

const newMessageHandlerCreator = (dispatch) => {
    return (newMessages) => {
        dispatch(getMessages(newMessages))
    }
}

const newStatusHandlerCreator = (dispatch) => {
    return (newStatus) => {
        dispatch(setWsStatus(newStatus))
    }
}

export const getNewMessages = () => async dispatch => {
    allUsersChatApI.start();
    allUsersChatApI.subscribe("messages", newMessageHandlerCreator(dispatch));
    allUsersChatApI.subscribe("status", newStatusHandlerCreator(dispatch));
}

export const sendMessage = (message) => () => {
    allUsersChatApI.sendMessage(message)
}

export default AllUsersChatSlice.reducer;