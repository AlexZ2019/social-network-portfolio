import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import ProfileReducer from "./Reducers/ProfileReducer";
import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
    ProfileReducer,
    form: formReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store;