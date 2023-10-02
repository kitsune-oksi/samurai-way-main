import React, {ChangeEvent} from 'react';
import {Button} from "../../common/Button/Button";
import {Posts} from "./Posts";
import {ProfileType} from "./MyPostsContainer";

export const MyPost: React.FC<ProfileType> = ({addPost, updateNewPostText, profilePage}) => {

    const {newPostMessage, posts} = profilePage;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        updateNewPostText(text)
    }

    return (
        <div>
            <div>My posts</div>
            <textarea value={newPostMessage} onChange={onChangeHandler}/>
            <Button title='Add post' callback={addPost}/>
            <Posts posts={posts}/>
        </div>
    )
}