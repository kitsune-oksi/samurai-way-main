import React, {ChangeEvent} from 'react';
import d from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messege} from "./Message/Message";
import {Button} from "../../Button/Button";
import {DialogsType} from "./DialogsContainer";

export const Dialogs: React.FC<DialogsType> = (props) => {

    const dialogsData = props.dialogsPage.users.map( u => <DialogsItem id={u.id} key={u.id} name={u.name}/>)
    const messageData = props.dialogsPage.messages.map((m => <Messege messege={m.message} key = {m.id}/>))

    const sendMessageHandler = () => {
        props.sendMessage()
    }

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        props.changeMessage(text)
    }

    return (
        <div className={d.Dialogs}>
            <div className={d.DialogsItem}>
                {dialogsData}
            </div>
            <div className={d.MessegesItem}>
                {messageData}
                <div>
                    <textarea value={props.dialogsPage.newMessageText} onChange={onChangeHandler}/>
                    <Button title='Send message' callback={sendMessageHandler}/>
                </div>
            </div>
        </div>
    )
}