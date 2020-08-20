import React from "react";
import {connect} from "react-redux";
import {
    getCurrentPage,
    getPageSize,
    getPortionPageSize,
    getSubscribed,
    getTotalUserCount,
    getUsersFromState
} from "../../Redux/Selectors/UsersSelector";
import {getSubscribe, getUnsubscribe, getUsers} from "../../Redux/Reducers/UsersReducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    subscribeUser = (userId) => {
        this.props.getSubscribe(userId);
    }

    unSubscribeUser = (userId) => {
        this.props.getUnsubscribe(userId);
    }
    render() {
        return (<>
                {this.props.isFetching && <Preloader/>}
                <Users {...this.props}
                       subscribeUser={this.subscribeUser}
                       unSubscribeUser={this.unSubscribeUser}
                />
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersFromState(state),
        isSubscribed: getSubscribed(state),
        isFetching: state.IsFetchingReducer.isFetching,
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        portionPageSize: getPortionPageSize(state)
    }
}

export default connect(mapStateToProps, {getUsers, getSubscribe, getUnsubscribe})(UsersContainer);