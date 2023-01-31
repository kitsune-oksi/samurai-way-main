import React from 'react';
import {NavLink} from "react-router-dom";
import d from '../Dialogs.module.css';

type DialogType = {
    id: number
    name: string
}

export const DialogsItem: React.FC<DialogType> = (props) => {
    let path = `/Dialogs/${props.id}`
    return (
        <div className={d.Dialog}><NavLink to={path}>{props.name}</NavLink></div>
    )
}
