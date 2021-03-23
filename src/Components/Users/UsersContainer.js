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
import {UserSearcher} from "./UserSearcher";
import Pagination from "../Common/Pagination/Pagination";

class UsersContainer extends React.Component {

    // componentDidMount() {
    //     this.props.getUsers(this.props.currentPage, this.props.pageSize);
    // }

    subscribeUser = (userId) => {
        this.props.getSubscribe(userId);
    }

    unSubscribeUser = (userId) => {
        this.props.getUnsubscribe(userId);
    }
    render() {
        return (<>
                {this.props.isFetching && <Preloader/>}
                <UserSearcher getUsers={this.props.getUsers}/>
                <Users {...this.props}
                       subscribeUser={this.subscribeUser}
                       unSubscribeUser={this.unSubscribeUser}
                       inProcess={this.props.inProcess}
                       getUsers={this.props.getUsers}
                />
                <Pagination/>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsersFromState(state),
        isSubscribed: getSubscribed(state),
        isFetching: state.UsersReducer.isFetching,
        totalUsersCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        portionPageSize: getPortionPageSize(state),
        inProcess: getInProcess(state)
    }
}

export default connect(mapStateToProps, {getUsers, getSubscribe, getUnsubscribe})(UsersContainer);