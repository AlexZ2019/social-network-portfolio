import ProfileSlice from "./Reducers/ProfileReducer";
import {reducer as formReducer} from 'redux-form'
import DialogsReducer from "./Reducers/DialogsReducer";
import UsersReducer from "./Reducers/UsersReducer";
import AuthReducer from "./Reducers/AuthReducer";
import InitializationReducer from "./Reducers/InitializationReducer";
import AllUsersChatSlice from "./Reducers/AllUsersChatReducer";
import {configureStore} from "@reduxjs/toolkit";

const reducers = {
    ProfileSlice,
    form: formReducer,
    DialogsReducer,
    UsersReducer,
    AuthReducer,
    InitializationReducer,
    AllUsersChatSlice
}

const store = configureStore({reducer: reducers});

window.store = store;

export default store;