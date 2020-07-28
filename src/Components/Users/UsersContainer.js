import React from "react";
import {connect} from "react-redux";
import {getSubscribed, getUsersFromState} from "../../Redux/Selectors/UsersSelector";
import {getUsers} from "../../Redux/Reducers/UsersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (<>
                {this.props.isFetching && <Preloader/>}
                <Users {...this.props}/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersFromState(state),
        subscribed: getSubscribed(state),
        isFetching: state.IsFetchingReducer.isFetching
    }
}

export default connect(mapStateToProps, {getUsers})(UsersContainer)