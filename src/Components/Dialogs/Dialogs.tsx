import React from 'react';
import d from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogType = {
    id: number
    name: string
}

type MessegeType = {
    messege: string
}

const Dialog = (props: DialogType) => {
    let path = `/Dialogs/${props.id}`
    return (
        <div className={d.Dialog}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

const Messege = (props: MessegeType) => {
    return (
        <div className={d.Messege}>{props.messege}</div>
    )
}

export const Dialogs = () => {
    type UserType = {
        id: number,
        name: string
    }

    type MessagesType = {
        id: number
        message: string
    }

    const users: UserType[] = [
        {id: 1, name: 'Игорь'},
        {id: 2, name: 'Марселин'},
        {id: 3, name: 'Чуча'}
    ]

    const messages: MessagesType[] = [
        {id: 1, message: 'Hey'},
        {id: 2, message: 'Wazzap'},
        {id: 3, message: 'U r hot'},
        {id: 4, message: 'I love u'}
    ]

    const dialogsData = users.map(u => <Dialog id={u.id} name={u.name}/>)

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