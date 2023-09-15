import {authAPI} from "../API/API";
import {AppDispatch} from "./redux-store";

type UserDataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    errors?: null | string
}

type SetUserData = {
    type: 'SET_USER_DATA'
    payload: {
        data: UserDataType
    }
}
type SetError = {
    type: 'SET_ERROR'
    payload: {
        error: string
    }
}

type ActionType = SetUserData | SetError;

const SET_USER_DATA = 'SET_USER_DATA'
const SET_ERROR = 'SET_ERROR'

const initialState: UserDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errors: null
}

export const AuthReducer = (state: UserDataType = initialState, action: ActionType): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload.data
            }
        case SET_ERROR:
            return {
                ...state,
                errors: action.payload.error
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
const setError = (error: string): SetError => ({
    type: SET_ERROR,
    payload: {
        error
    }
})

//TC
export const getAuthUserData = () => (dispatch: AppDispatch) => {
    return authAPI.me()
        .then((res) => {
            const {id, email, login} = res.data;
            if (res.resultCode === 0) {
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const logIn = (email: string, password: string, rememberMe?: boolean, captcha?: boolean) => (dispatch: AppDispatch) => {
    return authAPI.logIn(email, password, rememberMe, captcha)
        .then((res) => {
            if (res.resultCode === 0) {
                dispatch(getAuthUserData())
            } else {
                let message = res.messages.length > 0 ? res.messages[0] : 'Some error';
                // dispatch(stopSubmit('login', {_error: message}))
                dispatch(setError(message))
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
