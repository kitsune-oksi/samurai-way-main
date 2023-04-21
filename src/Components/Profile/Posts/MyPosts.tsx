import React, {ChangeEvent} from 'react';
import {Button} from "../../../Button/Button";
import {Posts} from "./Posts";
import {ProfileType} from "./MyPostsContainer";

export const MyPosts = (props: ProfileType) => {

    const addPostHandler = () => {
        props.addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.updateNewPostText(text)
    }

    return (
        <div>
            <div>My posts</div>
            <textarea value={props.profilePage.newPostMessage} onChange={onChangeHandler}/>
            <Button title='Add post' callback={addPostHandler}/>
            <Posts posts={props.profilePage.posts}/>
        </div>
    )
}