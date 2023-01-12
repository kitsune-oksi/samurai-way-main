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
    return (
        <div className={d.Dialogs}>
            <div className={d.DialogsItem}>
                <Dialog id={1} name='Игорь'/>
                <Dialog id={2} name='Марселин'/>
                <Dialog id={3} name='Чуча'/>
            </div>
            <div className={d.MessegesItem}>
                <Messege messege='Hey'/>
                <Messege messege='Wazzap'/>
                <Messege messege='U r hot'/>
                <Messege messege='I love u'/>
            </div>
        </div>
    )
}