import React, {useRef} from 'react';
import {Button} from "../../../Button/Button";
import {PostType, state} from "../../../redux/state";
import {Posts} from "./Posts";

type MyPostsType = {
    addPost: (postMessage: string) => void
    posts: PostType[]
}

export const MyPosts = (props: MyPostsType) => {

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPostHandler = () => {
        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
            newPostElement.current.value = ''
        }
    }

    return (
        <div>
            <div>My posts</div>
            <textarea ref={newPostElement}></textarea>
            <Button title='Add post' callback={addPostHandler}/>
            <Posts posts={props.posts}/>
        </div>
    )
}