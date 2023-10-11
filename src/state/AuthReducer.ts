import {AppDispatch} from "./store";
import {authAPI} from "../api/auth.api";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const SET_ERROR = 'auth/SET_ERROR'
const GET_CAPTCHA_SUCCESS = 'auth/GET_CAPTCHA_SUCCESS'

const initialState: UserDataType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    errors: null,
    captcha: null
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
        case GET_CAPTCHA_SUCCESS:
            return {...state, captcha: action.payload.url}
        default:
            return state
    }
}
//AC
const setAuthUserData = (id: string | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {
        data: {
            id,
            email,
            login,
            isAuth
        }
    }
} as const)
const setError = (error: string) => ({
    type: SET_ERROR,
    payload: {
        error
    }
} as const)
const getCaptchaSuccess = (url: string) => ({
    type: GET_CAPTCHA_SUCCESS,
    payload: {
        url
    }
} as const)

//TC
export const getAuthUserData = () => async (dispatch: AppDispatch) => {
    const res = await authAPI.me();
    const {id, email, login} = res.data;
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe?: boolean, captcha?: string) => async (dispatch: AppDispatch) => {
    const res = await authAPI.login(email, password, rememberMe, captcha);
    if (res.resultCode === 0) {
        await dispatch(getAuthUserData())
    } else {
        if (res.resultCode === 10) {
            await dispatch(getCaptcha())
        }
        let message = res.messages.length > 0 ? res.messages[0] : 'Some error';
        dispatch(setError(message))
    }
}
export const logout = () => async (dispatch: AppDispatch) => {
    const res = await authAPI.logOut();
    if (res.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export const getCaptcha = () => async (dispatch: AppDispatch) => {
    const res = await authAPI.getCaptcha();
    dispatch(getCaptchaSuccess(res.url))
}


//types
type UserDataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
    errors: null | string
    captcha: null | string
}
type ActionType =
    ReturnType<typeof setAuthUserData>
    | ReturnType<typeof setError>
    | ReturnType<typeof getCaptchaSuccess>;
