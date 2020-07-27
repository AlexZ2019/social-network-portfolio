import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import ProfileReducer from "./Reducers/ProfileReducer";
import { reducer as formReducer } from 'redux-form'
import DialogsReducer from "./Reducers/DialogsReducer";

const reducers = combineReducers({
    ProfileReducer,
    form: formReducer,
    DialogsReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store;