import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import { withRouter } from "react-router";
import {getProfile} from "../../Redux/Reducers/ProfileReducer";
import {getProfileFromState} from "../../Redux/Selectors/ProfileSelector";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
    }

    render() {
        return <Profile profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileFromState(state)
    }
}

export default compose (
    connect(mapStateToProps, {getProfile}),
    withRouter
)(ProfileContainer)