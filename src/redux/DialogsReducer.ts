import {ActionType, dialogsPageType, MessagesType} from "./state";

export type SendNewMessageType = {
    type: typeof SEND_NEW_MESSAGE
}

export type UpdateNewMessageType = {
    type: typeof UPDATE_NEW_MESSAGE_TEXT
    newText: string
}

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

export const DialogsReducer = (action: ActionType, state: dialogsPageType) => {
    switch (action.type) {
        case "SEND-NEW-MESSAGE":
            const newMessage: MessagesType = {
                id: state.messages.length + 1,
                message: state.newMessageText
            };
            state.messages.push(newMessage);
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
