import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMessagesFromState, getWsStatusFromState} from "../../Redux/Selectors/AllUsersChatSelector";
import {Message} from "./Message";
import {SendMessage} from "./SendMessage";
import {getMessages} from "../../Redux/Reducers/AllUsersChatReducer";

export const AllUsersChat = () => {

    const dispatch = useDispatch();
    const messages = useSelector(getMessagesFromState);

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch])

    return <div>
        <div>
            {messages.map(m => <Message message={m}/>)}
        </div>
        <SendMessage />
    </div>

}