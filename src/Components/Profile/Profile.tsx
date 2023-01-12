import React from 'react';
import p from './Profile.module.css'
import {Post} from "./MyPosts/Post/Post";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export function Profile () {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}