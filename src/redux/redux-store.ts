import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer, SendNewMessageType, UpdateNewMessageType} from "./DialogsReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";

// type ReducersType = typeof rootReducer;
// export type ReduxStoreType = ReturnType<ReducersType>;

// типизация всего нашего стейта
// аналогично

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ActionType = UpdateNewMessageType | SendNewMessageType

type UserType = {
    id: number,
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type DialogsPageType = {
    users: UserType[]
    messages: MessagesType[]
    newMessageText: string
}

const rootReducer = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer
});
// combineReducers создает объект с ключом-значением, воспринимать как state. Запись выше аналогична:
// ProfileReducer,
// DialogsReducer

export let store = createStore(rootReducer);
//@ts-ignore
window.store = store

