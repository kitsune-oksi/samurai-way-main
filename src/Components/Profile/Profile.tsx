import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPostsContainer";

export function Profile() {
    debugger
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}