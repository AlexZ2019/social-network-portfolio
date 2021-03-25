import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleWare from "redux-thunk"
import ProfileReducer from "./Reducers/ProfileReducer";
import { reducer as formReducer } from 'redux-form'
import DialogsReducer from "./Reducers/DialogsReducer";
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";
import InitializationReducer from "./Reducers/InitializationReducer";
import AllUsersChatReducer from "./Reducers/AllUsersChatReducer";

const reducers = combineReducers({
    ProfileReducer,
    form: formReducer,
    DialogsReducer,
    UsersReducer,
    AuthReducer,
    InitializationReducer,
    AllUsersChatReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleWare));

window.store = store;

export default store;