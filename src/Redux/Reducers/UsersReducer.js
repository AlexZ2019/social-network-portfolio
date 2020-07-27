import {UsersApI} from "../../API/API";

const GET_USERS = "src/Redux/Reducers/UsersReducer/GET_USERS"

let initialState = {
    users: []
}

const UserReducer = (state= initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state, users: [action.users]
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

// Thunk creator
export const getUsers = () => async dispatch => {
    let data = await UsersApI.getUsersRequest()
    console.log(data)
    dispatch(getUsersSuccess(data.items))
}

export default UserReducer