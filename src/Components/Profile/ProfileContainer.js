import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import { withRouter } from "react-router";


class ProfileContainer extends React.Component {

    componentDidMount() {
        // let userId = this.props.match.params.userId;
    }

    render() {
        return <Profile  />
    }
}

let mapStateToProps = (state) => {
    return {

    }
}

export default compose (
    connect(mapStateToProps),
    withRouter
)(ProfileContainer)