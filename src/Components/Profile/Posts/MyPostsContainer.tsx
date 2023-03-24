import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/ProfileReducer';
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

export const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().profilePage;

                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text: string) => {
                    let action = updateNewPostActionCreator(text);
                    store.dispatch(action)
                }
                return (
                    <div>
                        <MyPosts addPost={addPost} updateNewPostText={onPostChange}
                                 posts={state.posts} newPostMessage={state.newPostMessage}
                        />
                    </div>
                )
            }
            }
        </StoreContext.Consumer>
    )
}