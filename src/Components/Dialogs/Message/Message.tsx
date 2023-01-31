import React from 'react';
import d from '../Dialogs.module.css';

type MessegeType = {
    messege: string
}

export const Messege: React.FC<MessegeType> = (props) => {
    return (
        <div className={d.Messege}>{props.messege}</div>
    )
}
