import {reset} from "redux-form";

const ADD_MESSAGE = "src/Redux/Reducers/DialogReducer/ADD_MESSAGE/"
const DELETE_DIALOG = "src/Redux/Reducers/DialogReducer/DELETE_DIALOG/"

let initialState = {
    users: [
        {id: 1, name: "user 1"},
        {id: 2, name: "user 1"},
        {id: 3, name: "user 1"},
        {id: 4, name: "user 1"},
        {id: 5, name: "user 1"},
        {id: 6, name: "user 1"},
        {id: 7, name: "user 1"},
        {id: 8, name: "user 1"},
        {id: 9, name: "user 1"},
        {id: 10, name: "user 1"}
    ],
    dialogs: [
        {id: 1, dialog: "hey"},
        {id: 2, dialog: "hey"},
        {id: 3, dialog: "hey"},
        {id: 4, dialog: "hey"},
        {id: 5, dialog: "hey"},
        {id: 6, dialog: "hey"},
        {id: 7, dialog: "hey"},
        {id: 8, dialog: "hey"},
        {id: 9, dialog: "hey"},
        {id: 10, dialog: "hey"}
    ]
}

const DialogReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state, dialogs: [...state.dialogs, {id: state.dialogs.length + 2, dialog: action.newMessage}]
            }
        case DELETE_DIALOG:
            return {
                ...state, dialogs: state.dialogs.filter(dialog => dialog !== action.dialog)
            }
        default: return state
    }
}

//Action creators
let addMessageSuccess = (newMessage) => {
    return {type: ADD_MESSAGE, newMessage}
}

let deleteDialogSuccess = (dialog) => {
    return {type: DELETE_DIALOG, dialog}
}
//Thunk creators
export let addMessage = newMessage => dispatch => {
    dispatch(addMessageSuccess(newMessage))
    dispatch(reset("dialogForm"))
}

export let deleteDialog = dialog => dispatch => {
    dispatch(deleteDialogSuccess(dialog))
}

export default DialogReducer