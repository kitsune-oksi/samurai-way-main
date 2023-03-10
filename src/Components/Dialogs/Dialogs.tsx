import React, {ChangeEvent} from 'react';
import d from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messege} from "./Message/Message";
import {ActionType, dialogsPageType} from "../../redux/state";
import {Button} from "../../Button/Button";
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/DialogsReducer";

type DialogsPropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: ActionType) => void
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {users, messages, newMessageText} = props.dialogsPage

    const dialogsData = users.map(u => <DialogsItem id={u.id} name={u.name}/>)
    const messageData = messages.map((m => <Messege messege={m.message}/>))

    const sendMessageHandler = () => {
        props.dispatch(sendNewMessageActionCreator())
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.dispatch(updateNewMessageTextActionCreator(text))
    }

    return (
        <div className={d.Dialogs}>
            <div className={d.DialogsItem}>
                {dialogsData}
            </div>
            <div className={d.MessegesItem}>
                {messageData}
                <div>
                    <textarea value={newMessageText} onChange={onChangeHandler}/>
                    <Button title='Send message' callback={sendMessageHandler}/>
                </div>
            </div>
        </div>
    )
}