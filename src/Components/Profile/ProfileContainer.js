import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {compose} from "redux";
import {Redirect, withRouter} from "react-router";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../Redux/Reducers/ProfileReducer";
import {getProfileFromState, getProfileStatusFromState} from "../../Redux/Selectors/ProfileSelector";
import {getAuthUserIdFromState, getIsAuthFromState} from "../../Redux/Selectors/AuthSelector";

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
        if (!this.props.isAuth) {
            return <Redirect to={"/login"}/>
        }
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
        isAuth: getIsAuthFromState(state)
    }
}

export default compose (
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
    withRouter
)(ProfileContainer)