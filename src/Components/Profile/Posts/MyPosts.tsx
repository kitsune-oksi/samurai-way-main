import React, {ChangeEvent} from 'react';
import {Button} from "../../../Button/Button";
import {ActionType, addPostActionCreator, PostType, updateNewPostActionCreator} from "../../../redux/state";
import {Posts} from "./Posts";

type MyPostsType = {
    dispatch: (action: ActionType) => void
    posts: PostType[]
    newPostMessage: string
}

export const MyPosts = (props: MyPostsType) => {

    const addPostHandler = () => {
            props.dispatch(addPostActionCreator())
        }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div>
            <div>My posts</div>
            <textarea value={props.newPostMessage} onChange={onChangeHandler}/>
            <Button title='Add post' callback={addPostHandler}/>
            <Posts posts={props.posts}/>
        </div>
    )
}