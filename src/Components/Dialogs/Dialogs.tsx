import React, {ChangeEvent} from 'react';
import d from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messege} from "./Message/Message";
import {MessagesType, UserType} from "../../redux/store";
import {Button} from "../../Button/Button";

type DialogsPropsType = {
    sendMessage: () => void
    changeMessage: (text: string) => void
    users: UserType[]
    messages: MessagesType[]
    newMessageText: string

}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {users, messages, newMessageText} = props

    const dialogsData = users.map(u => <DialogsItem id={u.id} name={u.name}/>)
    const messageData = messages.map((m => <Messege messege={m.message}/>))

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
                    <textarea value={newMessageText} onChange={onChangeHandler}/>
                    <Button title='Send message' callback={sendMessageHandler}/>
                </div>
            </div>
        </div>
    )
}