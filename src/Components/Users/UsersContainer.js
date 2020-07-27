import React from "react";
import {connect} from "react-redux";
import {getUsersFromState} from "../../Redux/Selectors/UsersSelector";
import {getUsers} from "../../Redux/Reducers/UsersReducer";
import Users from "./Users";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <Users {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersFromState(state)
    }
}

export default connect(mapStateToProps, {getUsers})(UsersContainer)