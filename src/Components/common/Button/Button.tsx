import React from "react";

type ButtonPropsType = {
    title: string
    callback: () => void
}

export const Button: React.FC<ButtonPropsType> = ({title, callback}) => {
    return (
        <button onClick={callback}>{title}</button>
    )
}