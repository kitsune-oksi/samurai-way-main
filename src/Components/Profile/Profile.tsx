import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./Posts/MyPosts";
import {ActionType, postsType} from "../../redux/state";

type ProfilePropsType = {
    dispatch: (action: ActionType) => void
    profilePage: postsType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts dispatch={props.dispatch} posts={props.profilePage.posts}
                     newPostMessage={props.profilePage.newPostMessage}/>
        </div>
    )
}