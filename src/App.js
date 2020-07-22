import React from 'react';
import './App.css';
import Menu from "./Components/Menu/Menu";
import {Route} from "react-router-dom";
import ProfileContainer from "./Components/Profile/ProfileContainer";

function App() {
  return (
    <div className="App">

      <Menu/>
        <Route path={"/profile"} render={() => <ProfileContainer/>}/>
    </div>
  );}
export default App;
