import React from "react";
import {connect} from "react-redux";
import {getDialogs, getUsersForDialogs} from "../../Redux/Selectors/DialogsSelector";
import {addMessage, deleteDialog} from "../../Redux/Reducers/DialogsReducer";
import Dialogs from "./Dialogs";

class DialogsContainer extends React.Component {
    onAddMessage = (values) => {
        this.props.addMessage(values.newMessage)
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
export default connect(mapStateToProps, {addMessage, deleteDialog})(DialogsContainer)