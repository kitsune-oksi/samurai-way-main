import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPostsContainer";
import {ProfileContainerStateType} from "./ProfileContainer";

export function Profile (props: ProfileContainerStateType) {
    return (
        <div className={p.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}