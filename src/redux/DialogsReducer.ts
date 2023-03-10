import {ActionType, dialogsPageType, MessagesType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_NEW_MESSAGE = 'SEND-NEW-MESSAGE';

const DialogsReducer = (action: ActionType, state: dialogsPageType) => {
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
       state.newMessageText = action.newText;
    } else if (action.type === SEND_NEW_MESSAGE) {
        const newMessage: MessagesType = {
            id: state.messages.length + 1,
            message: state.newMessageText
        };
        state.messages.push(newMessage);
    }
    return state
}

export default DialogsReducer