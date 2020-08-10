import React from "react";
import Navigation from "./Navigation";
import {connect} from "react-redux";
import {getAuth, getLogout} from "../../Redux/Reducers/AuthReducer";
import {getAuthLoginFromState, getIsAuthFromState} from "../../Redux/Selectors/AuthSelector";

class NavigationContainer extends React.Component{
    componentDidMount() {
        this.props.getAuth()
    }
    getLogout() {
        this.props.getLogout()
    }
    render() {
        return (
            <Navigation {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthFromState(state),
        login: getAuthLoginFromState(state)
    }
}

export default connect(mapStateToProps, {getAuth, getLogout})(NavigationContainer)