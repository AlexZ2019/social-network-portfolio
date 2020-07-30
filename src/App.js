import React from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";
import {Route} from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialigs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import NavigationContainer from "./Components/Navigation/NavigationContainer";

class App extends React.Component {
    render() {
        return (
            <div className="App container-fluid">
                <div className="row">
                    <NavigationContainer/>
                    <Menu/>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                </div>
            </div>
        );
    }
}

export default App;
