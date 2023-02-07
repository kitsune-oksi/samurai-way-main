import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPosts} from "./Posts/MyPosts";
import {postsType, PostType} from "../../redux/state";

type ProfilePropsType = {
    addPost: (postMessage: string)=>void
    posts: PostType[]
}

export function Profile (props: ProfilePropsType) {
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.posts}/>
        </div>
    )
}