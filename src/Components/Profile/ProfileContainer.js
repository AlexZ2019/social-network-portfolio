import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {getPostsFromState} from "../../Redux/Selectors/ProfileSelector";
import Profile from "./Profile";

class ProfileContainer extends PureComponent{

    render() {
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        posts: getPostsFromState(state)
    }
}

export default connect(mapStateToProps)(ProfileContainer)