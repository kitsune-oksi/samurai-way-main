import React from 'react';
import d from './Dialogs.module.css'
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Messege} from "./Message/Message";
import {MessagesType, UserType} from "../../redux/state";

type DialogsPropsType = {
    users: UserType[]
    messages: MessagesType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const {users, messages} = props

    const dialogsData = users.map(u => <DialogsItem id={u.id} name={u.name}/>)

    const messageData = messages.map((m => <Messege messege={m.message}/>))

    return (
        <div className={d.Dialogs}>
            <div className={d.DialogsItem}>
                {dialogsData}
            </div>
            <div className={d.MessegesItem}>
                {messageData}
            </div>
        </div>
    )
}