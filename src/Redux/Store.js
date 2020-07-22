import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import ProfileReducer from "./Reducers/ProfileReducer";


const reducers = combineReducers({
    ProfileReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store;