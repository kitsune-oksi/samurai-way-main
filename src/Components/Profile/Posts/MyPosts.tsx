import React, {ChangeEvent} from 'react';
import {Button} from "../../../Button/Button";
import {PostType} from "../../../redux/state";
import {Posts} from "./Posts";

type MyPostsType = {
    addPost: () => void
    posts: PostType[]
    newPostMessage: string
    newPostText: (newText: string)=>void
}

export const MyPosts = (props: MyPostsType) => {

    const addPostHandler = () => {
            props.addPost()
        }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        props.newPostText(text)
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