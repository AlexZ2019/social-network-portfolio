import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage} from "../../Redux/Reducers/AllUsersChatReducer";
import {getWsStatusFromState} from "../../Redux/Selectors/AllUsersChatSelector";

export const SendMessage = () => {

    let [message, setMessage] = useState("");
    const wsStatus = useSelector(getWsStatusFromState);
    const dispatch = useDispatch();

    const sendNewMessage = () => {
        if (message.length > 0) {
            dispatch(sendMessage(message));
            setMessage("");
        }
    }

    return <div>
        <textarea value={message} onChange={(e) => setMessage(e.currentTarget.value)}>
        </textarea>
        <button disabled={wsStatus === "pending" ? true : false} onClick={sendNewMessage}>Send</button>
    </div>
}