import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPostsContainer";
import {ProfileType} from "../../redux/ProfileReducer";

export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}

export function Profile (props: ProfilePropsType) {

    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}