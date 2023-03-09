
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
    posts: PostType[]
    newPostMessage: string
}


export type StateType = {
    dialogsPage: dialogsPageType
    profilePage: postsType
}

export type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    addPost: () => void
    newPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
}

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
        },
        profilePage: {
            posts: [
                {id: 1, post: 'Hello world'}
            ],
            newPostMessage: ''
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State changed')
    },
    addPost() {
        const newPost: PostType = {
            id: this._state.profilePage.posts.length + 1,
            post: this._state.profilePage.newPostMessage
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostMessage = '';
        this._callSubscriber();
    },
    newPostText(newText) {
        this._state.profilePage.newPostMessage = newText;
        this._callSubscriber();
    },
    subscribe(observer) {
        this._callSubscriber = observer
    }
}

// window.store = store
