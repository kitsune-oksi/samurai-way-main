import React from "react";

type ButtonPropsType = {
    title: string
    callback: () => void
}

export const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button onClick={props.callback}>{props.title}</button>
    )
}