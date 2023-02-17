import {renderEntireTree} from "../render";

export type UserType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostType = {
    id: number
    post: string | undefined
}

type dialogsPageType = {
    users: UserType[]
    messages: MessagesType[]
}
export type postsType = {
    posts:PostType[]
    newPostMessage: string
}


export type StateType = {
    dialogsPage: dialogsPageType
    profilePage: postsType
}

export const state: StateType = {
    dialogsPage: {
        users: [
            {id: 1, name: 'Игорь'},
            {id: 2, name: 'Марселин'},
            {id: 3, name: 'Чуча'}
        ],

        messages: [
            {id: 1, message: 'Hey'},
            {id: 2, message: 'Wazzap'},
            {id: 3, message: 'U r hot'},
            {id: 4, message: 'I love u'}
        ],
    },
    profilePage: {
        posts: [
            {id: 1, post: 'Hello world'}
        ],
        newPostMessage: ''
    }
}

export const addPost = () => {
    const newPost: PostType = {
        id: state.profilePage.posts.length+1,
        post: state.profilePage.newPostMessage
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostMessage = '';
    renderEntireTree(state);
}

export const newPostText = (newText: string) => {
    state.profilePage.newPostMessage = newText;
    renderEntireTree(state);
}