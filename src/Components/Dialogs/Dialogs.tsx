import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {Button} from "../common/Button/Button";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessage, changeMessage}) => {

    const {users, messages, newMessageText} = dialogsPage;

    const dialogsData = users.map( u => <DialogsItem id={u.id} key={u.id} name={u.name}/>)
    const messageData = messages.map((m => <Message message={m.message} key = {m.id}/>))

    const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value
        changeMessage(text)
    }

    return (
        <div className={s.Dialogs}>
            <div className={s.DialogsItem}>
                {dialogsData}
            </div>
            <div className={s.MessegesItem}>
                {messageData}
                <div>
                    <textarea value={newMessageText} onChange={onChangeHandler}/>
                    <Button title='Send message' callback={sendMessage}/>
                </div>
            </div>
        </div>
    )
}