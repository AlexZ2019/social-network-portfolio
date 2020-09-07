import React from "react";
import {connect} from "react-redux";
import {
    getCurrentPage, getInProcess,
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
                       inProcess={this.props.inProcess}
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
        portionPageSize: getPortionPageSize(state),
        inProcess: getInProcess(state)
    }
}

export default connect(mapStateToProps, {getUsers, getSubscribe, getUnsubscribe})(UsersContainer);