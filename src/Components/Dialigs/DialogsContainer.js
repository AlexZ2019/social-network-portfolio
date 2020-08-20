import React from "react";
import {connect} from "react-redux";
import {getDialogs, getUsersForDialogs} from "../../Redux/Selectors/DialogsSelector";
import {addMessage, deleteDialog} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";
import {WithRedirect} from "../../Tools/HOCS/WithRedirect";
import {compose} from "redux";

class DialogsContainer extends React.Component {
    onAddMessage = (values) => {
        this.props.addMessage(values.newMessage);
    }
    render() {
        return (
            <Dialogs {...this.props} onAddMessage={this.onAddMessage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        users: getUsersForDialogs(state)
    }
}
export default compose(
    connect(mapStateToProps, {addMessage, deleteDialog}),
    WithRedirect
)(DialogsContainer);