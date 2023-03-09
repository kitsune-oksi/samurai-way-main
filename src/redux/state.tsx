
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

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

export type dialogsPageType = {
    users: UserType[]
    messages: MessagesType[]
    newMessageText: string
}
export type postsType = {
    posts: PostType[]
    newPostMessage: string
}

export type StateType = {
    dialogsPage: dialogsPageType
    profilePage: postsType
}

type AddPostType = {
    type: typeof ADD_POST
}

type SendNewMessageType = {
    type: typeof SEND_NEW_MESSAGE
}

type UpdateNewPostType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
type UpdateNewMessageType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}

export type ActionType = AddPostType | UpdateNewPostType | UpdateNewMessageType | SendNewMessageType

export type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    _addPost: () => void
    _newPostText: (newText: string) => void
    _newMessageText: (newText: string) => void
    _addMessage: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}

export const addPostActionCreator = (): AddPostType => ({
    type: ADD_POST
})
export const updateNewPostActionCreator = (text: string): UpdateNewPostType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export const sendNewMessage = (): SendNewMessageType => ({
    type: SEND_NEW_MESSAGE
})
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})

export let store: StoreType = {
    _state: {
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
            newMessageText: ''
        },
        profilePage: {
            posts: [
                {id: 1, post: 'Hello world'}
            ],
            newPostMessage: ''
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },
    _addPost() {
        const newPost: PostType = {
            id: this._state.profilePage.posts.length + 1,
            post: this._state.profilePage.newPostMessage
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostMessage = '';
        this._callSubscriber();
    },
    _newPostText(newText) {
        this._state.profilePage.newPostMessage = newText;
        this._callSubscriber();
    },
    _newMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber();
    },
    _addMessage() {
        const newMessage: MessagesType = {
            id: this._state.dialogsPage.messages.length + 1,
            message: this._state.dialogsPage.newMessageText
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber();
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._newPostText(action.newText)
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._newMessageText(action.newText)
        } else if (action.type === SEND_NEW_MESSAGE) {
            this._addMessage()
        }
    }
}

// window.store = store
