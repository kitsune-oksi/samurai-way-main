import p from "./ProfileInfo.module.css";
import React from "react";
import {ProfilePropsType} from "../Profile";

export const ProfileInfo = (props: ProfilePropsType) => {

    return (
        <>
            <div>
                <img className={p.AppBackground} alt='cover'
                     src='https://img.freepik.com/premium-photo/colorful-galaxy-background-with-stars-universe-with-purple-smoke_213524-771.jpg?w=2000'/>
            </div>
            <div>
                {props.profile?.photos.large && <img src={props.profile?.photos.large} alt={'avatar'}/>}
                ava+description
            </div>
        </>
    )
}