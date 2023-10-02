
const UPDATE_NEW_MESSAGE_TEXT = 'dialogsPage/UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'dialogsPage/SEND-NEW-MESSAGE';

const initialState: DialogsPageType = {
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
}

export const DialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case SEND_NEW_MESSAGE:
            const newMessage: MessagesType = {
                id: state.messages.length + 1,
                message: state.newMessageText
            };
            return  {...state, messages: [...state.messages, newMessage], newMessageText: ''}
        case UPDATE_NEW_MESSAGE_TEXT:
            return {...state, newMessageText: action.payload.newText}
        default:
            return state;
    }
}

//AC
export const sendNewMessage = () => ({
    type: SEND_NEW_MESSAGE
} as const)
export const updateNewMessageText = (newText: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    payload: {
        newText
    }
} as const)

//types
type ActionType = ReturnType<typeof updateNewMessageText> | ReturnType<typeof sendNewMessage>
export type DialogsPageType = {
    users: UserType[]
    messages: MessagesType[]
    newMessageText: string
}
type UserType = {
    id: number,
    name: string
}
type MessagesType = {
    id: number
    message: string
}