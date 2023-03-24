import {ActionType, dialogsPageType, MessagesType} from "./store";

export type SendNewMessageType = {
    type: typeof SEND_NEW_MESSAGE
}

export type UpdateNewMessageType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const initialState = {
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

export const DialogsReducer = (state: dialogsPageType = initialState, action: ActionType): dialogsPageType => {
    switch (action?.type) {
        case "SEND-NEW-MESSAGE":
            const newMessage: MessagesType = {
                id: state.messages.length + 1,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
            state.newMessageText='';
            return state;
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const sendNewMessageActionCreator = (): SendNewMessageType => ({
    type: SEND_NEW_MESSAGE
})
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageType => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text
})
