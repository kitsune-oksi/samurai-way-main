import {ActionType, postsType, PostType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ProfileReducer = (action: ActionType, state: postsType) => {
    if (action.type === ADD_POST) {
        const newPost: PostType = {
            id: state.posts.length + 1,
            post: state.newPostMessage
        }
        state.posts.push(newPost);
        state.newPostMessage = '';
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostMessage = action.newText;
    }

    return state
}

export default ProfileReducer