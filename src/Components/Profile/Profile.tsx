import React from 'react';
import p from './Profile.module.css'
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/store";
import {ReduxStoreType} from "../../redux/redux-store";
import {MyPostsContainer} from "./Posts/MyPostsContainer";
import {Store} from "redux";

type ProfilePropsType = {
    store: Store<ReduxStoreType, ActionType>
}

export function Profile(props: ProfilePropsType) {
    debugger
    return (
        <div className={p.content}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
            {/*<MyPosts dispatch={props.dispatch} posts={props.profilePage.posts}*/}
            {/*         newPostMessage={props.profilePage.newPostMessage}/>*/}
        </div>
    )
}