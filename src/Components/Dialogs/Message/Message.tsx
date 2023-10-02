import React from 'react';
import s from '../Dialogs.module.css';

export const Message: React.FC<MessageType> = ({message}) => {
    return (
        <div className={s.Message}>{message}</div>
    )
}

//types
type MessageType = {
    message: string
}
