import React from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";
import {Route} from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import DialogsContainer from "./Components/Dialigs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import NavigationContainer from "./Components/Navigation/NavigationContainer";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import {getInitialize} from "./Redux/Reducers/InitializationReducer";
import Preloader from "./Components/Common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.getInitialize();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="App container-fluid">
                <div className="row">
                    <NavigationContainer/>
                    <Menu/>
                    <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                    <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                    <Route path={"/users"} render={() => <UsersContainer/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                    {/*<Route path={"/settings"} render={() => <Settings/>}/>*/}
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => ({initialized: state.InitializationReducer.initialized});

export default connect(mapStateToProps, {getInitialize})(App);
