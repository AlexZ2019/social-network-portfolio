import AuthReducer, {getAuth} from "./AuthReducer";
import {getProfile} from "./ProfileReducer";

const INITIALIZE = "InitializationReducer/INITIALIZE"

let InitialState = {
    initialized: false
}

const InitializationReducer = (state = InitialState, action) => {
    if (action.type === INITIALIZE) {
        return {
            ...state, initialized: true
        }
    }
    else {
        return state
    }
}

const initializedSuccess = () => ({type: INITIALIZE})

export const getInitialize = () => (dispatch, getState) => {
    let promise = dispatch(getAuth())
    Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        }
    )
}


export default InitializationReducer