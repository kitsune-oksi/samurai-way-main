import {AddPostType, UpdateNewPostType} from "./ProfileReducer";
import {SendNewMessageType, UpdateNewMessageType} from "./DialogsReducer";

type UserType = {
    id: number,
    name: string
}

type MessagesType = {
    id: number
    message: string
}

type PostType = {
    id: number
    post: string | undefined
}

type DialogsPageType = {
    users: UserType[]
    messages: MessagesType[]
    newMessageText: string
}

type ProfilePageType = {
    posts: PostType[]
    newPostMessage: string
}

type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

type ActionType = AddPostType | UpdateNewPostType | UpdateNewMessageType | SendNewMessageType

type StoreType = {
    _state: StateType
    _callSubscriber: () => void
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionType) => void
}
//
// export let store: StoreType = {
//     _state: {
//         dialogsPage: {
//             users: [
//                 {id: 1, name: 'Игорь'},
//                 {id: 2, name: 'Марселин'},
//                 {id: 3, name: 'Чуча'}
//             ],
//
//             messages: [
//                 {id: 1, message: 'Hey'},
//                 {id: 2, message: 'Wazzap'},
//                 {id: 3, message: 'U r hot'},
//                 {id: 4, message: 'I love u'}
//             ],
//             newMessageText: ''
//         },
//         profilePage: {
//             posts: [
//                 {id: 1, post: 'Hello world'}
//             ],
//             newPostMessage: ''
//         }
//     },
//     _callSubscriber() {
//         console.log('State changed')
//     },
//
//     getState() {
//         return this._state
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = ProfileReducer(action, this._state.profilePage);
//         this._state.dialogsPage = DialogsReducer(action, this._state.dialogsPage);
//
//         this._callSubscriber();
//     }
// }
//
// // window.store = store
