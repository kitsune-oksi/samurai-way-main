import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./Posts/MyPosts";
import {postsType} from "../../redux/state";

type ProfilePropsType = {
    addPost: () => void
    profilePage: postsType
    newPostText: (newText: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.profilePage.posts}
                     newPostMessage={props.profilePage.newPostMessage} newPostText={props.newPostText}/>
        </div>
    )
}