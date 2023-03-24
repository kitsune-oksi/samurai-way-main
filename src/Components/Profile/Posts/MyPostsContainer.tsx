import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/ProfileReducer';
import {MyPosts} from "./MyPosts";

type MyPostsType = {
    store: any
}

export const MyPostsContainer = (props: MyPostsType) => {

    const state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const onPostChange = (text: string) => {
        let action = updateNewPostActionCreator(text);
        props.store.dispatch(action)
    }
    debugger
    return (
        <div>
            <MyPosts addPost={addPost} updateNewPostText={onPostChange}
                     posts={state.posts} newPostMessage={state.newPostMessage}
            />
        </div>
    )
}