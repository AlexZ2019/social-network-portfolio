import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import {withRouter} from "react-router";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../Redux/Reducers/ProfileReducer";
import {getProfileFromState, getProfileStatusFromState} from "../../Redux/Selectors/ProfileSelector";
import {getAuthUserIdFromState} from "../../Redux/Selectors/AuthSelector";
import {WithRedirect} from "../../Tools/HOCS/WithRedirect";

class ProfileContainer extends React.Component {

    updateProfile() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId)
        this.props.getProfileStatus(userId)
    }

    componentDidMount() {
        this.updateProfile()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile()
        }
    }

    render() {
        return <Profile profile={this.props.profile}
                        profileStatus={this.props.profileStatus}
                        updateProfileStatus={this.props.updateProfileStatus}
            />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: getProfileFromState(state),
        userId: getAuthUserIdFromState(state),
        profileStatus: getProfileStatusFromState(state),
    }
}

export default compose (
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    WithRedirect
)(ProfileContainer)