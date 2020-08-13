import React from "react";
import {Redirect} from "react-router";
import {connect} from "react-redux";
import {getIsAuthFromState} from "../../Redux/Selectors/AuthSelector";

let mapStateToProps = (state) => {
    return {
        isAuth: getIsAuthFromState(state)
    }
}

export const WithRedirect = (WrappedComponent) => {
    class WithRedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) {
                return <Redirect to={"/login"} />
            }
            else {
                return <WrappedComponent {...this.props}/>
            }
        }
    }
    return connect(mapStateToProps, {})(WithRedirectComponent)
}
