import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import {ProfileReducer} from "./ProfileReducer";
import {DialogsReducer} from "./DialogsReducer";
import {UsersReducer} from "./UsersReducer";
import {AuthReducer} from "./AuthReducer";
import thunk, { ThunkDispatch } from "redux-thunk";
import { reducer as formReducer} from "redux-form";
import { composeWithDevTools } from 'redux-devtools-extension';
import {AppReducer} from "./AppReducer";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AnyAction>;

const rootReducer = combineReducers({
    dialogsPage: DialogsReducer,
    profilePage: ProfileReducer,
    usersPage: UsersReducer,
    auth: AuthReducer,
    form: formReducer,
    app: AppReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


