import React from 'react';
import d from './Dialogs.module.css'
import {ActionType} from "../../redux/store";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/DialogsReducer";
import {Store} from "redux";
import {ReduxStoreType} from "../../redux/redux-store";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: Store<ReduxStoreType, ActionType>
}

export const DialogsContainer: React.FC<DialogsPropsType> = (props) => {

    const state = props.store.getState().dialogsPage;

    const sendMessage = () => {
        props.store.dispatch(sendNewMessageActionCreator())
    }

    const changeMessage = (text: string) => {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
        <div className={d.Dialogs}>
            <Dialogs sendMessage={sendMessage} changeMessage={changeMessage}
            users={state.users} messages={state.messages} newMessageText={state.newMessageText}/>
        </div>
    )
}