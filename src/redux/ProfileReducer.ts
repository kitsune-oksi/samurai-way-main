import {ActionType, postsType, PostType} from "./store";

export type AddPostType = {
    type: typeof ADD_POST
}
export type UpdateNewPostType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const initialState = {
    posts: [
        {id: 1, post: 'Hello world'}
    ],
    newPostMessage: ''
}

export const ProfileReducer = (state: postsType = initialState, action: ActionType): postsType => {
    switch (action?.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: state.posts.length + 1,
                post: state.newPostMessage
            }
            state.posts.push(newPost);
            state.newPostMessage = '';
            return state;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostMessage = action.newText;
            return state;
        default:
            return state
    }
}

export const addPostActionCreator = (): AddPostType => ({
    type: ADD_POST
})
export const updateNewPostActionCreator = (text: string): UpdateNewPostType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
