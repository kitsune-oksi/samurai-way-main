import { authAPI } from "../API/API";
import {AppDispatch} from "./redux-store";

type UserDataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetUserData = {
    type: 'SET_USER_DATA'
    payload: {
        data: UserDataType
    }
}

type ActionType = SetUserData;

const SET_USER_DATA = 'SET_USER_DATA'

const initialState: UserDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

export const AuthReducer = (state: UserDataType = initialState, action: ActionType): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ... action.payload.data
            }
        default:
            return state
    }
}
//AC
const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean): SetUserData => ({
    type: SET_USER_DATA,
    payload: {
        data: {
            id,
            email,
            login,
            isAuth
        }
    }
})

//TC
export const getAuthUserData = () => (dispatch: AppDispatch) => {
    authAPI.me()
        .then((res) => {
            const {id, email, login} = res.data;
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
export const logIn = (email: string, password: string, rememberMe?: boolean, captcha?: boolean) => (dispatch: AppDispatch) => {
    authAPI.logIn(email, password, rememberMe, captcha)
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}
export const logOut = () => (dispatch: AppDispatch) => {
    authAPI.logOut()
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}