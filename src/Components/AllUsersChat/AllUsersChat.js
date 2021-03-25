import React, {useEffect} from "react";
import {getMessagesFromState} from "../../Redux/Selectors/AllUsersChatSelector";
import {Message} from "./Message";
import {SendMessage} from "./SendMessage";
import {getNewMessages} from "../../Redux/Reducers/AllUsersChatReducer";
import {useDispatch, useSelector} from "react-redux";

export const AllUsersChat = () => {

    const dispatch = useDispatch();
    const messages = useSelector(getMessagesFromState);

    useEffect(() => {
        dispatch(getNewMessages())
    }, [dispatch])

    return <div>
        <div>
            {messages.map((m, index) => <Message key={index} message={m}/>)}
        </div>
        <SendMessage />
    </div>

}