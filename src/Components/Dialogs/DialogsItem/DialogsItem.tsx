import React from 'react';
import {NavLink} from "react-router-dom";
import s from '../Dialogs.module.css';

export const DialogsItem: React.FC<DialogType> = ({id, name}) => {
    let path = `/Dialogs/${id}`
    return (
        <div className={s.Dialog}><NavLink to={path}>{name}</NavLink></div>
    )
}

//types
type DialogType = {
    id: number
    name: string
}
