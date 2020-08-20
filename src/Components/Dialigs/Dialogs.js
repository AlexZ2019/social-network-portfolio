import React from "react";
import {Field, reduxForm} from "redux-form";

let DialogsForm = ({handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name={"newMessage"} component={"input"} placeholder="Message"/>
            <button>Send</button>
        </form>
    )
}

let DialogsFormRedux = reduxForm({
    form: "dialogForm"
})(DialogsForm);

let Dialogs = (props) => {
    return (<React.Fragment>
            <div>
                {props.users.map(u => <div key={u.id}>{u.name}</div>)}
                {props.dialogs.map(d => <div key={d.id}>{d.dialog}</div>)}
            </div>
            <div>
                <DialogsFormRedux onSubmit={props.onAddMessage}/>
            </div>
        </React.Fragment>
    )
}
export default Dialogs;