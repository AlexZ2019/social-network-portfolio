import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import ProfileReducer from "./Reducers/ProfileReducer";
import { reducer as formReducer } from 'redux-form'
import DialogsReducer from "./Reducers/DialogsReducer";
import UsersReducer from "./Reducers/UsersReducer";
import IsFetchingReducer from "./Reducers/IsFetchingReducer";

const reducers = combineReducers({
    ProfileReducer,
    form: formReducer,
    DialogsReducer,
    UsersReducer,
    IsFetchingReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare))

window.store = store

export default store;