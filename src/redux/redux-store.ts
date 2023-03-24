import {combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";

const reducers = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer
});
// combineReducers создает объект с ключом-значением, воспринимать как state. Запись выше аналогична:
// ProfileReducer,
// DialogsReducer

type ReducersType = typeof reducers;
export type ReduxStoreType = ReturnType<ReducersType>;

export let store = createStore(reducers);

