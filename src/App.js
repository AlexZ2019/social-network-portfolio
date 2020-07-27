import React from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";
import {Route} from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialigs/DialogsContainer";

function App() {
    return (
        <div className="App">
            <Menu/>
            <Route path={"/profile"} render={() => <ProfileContainer/>}/>
            <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
        </div>
    );
}

export default App;
