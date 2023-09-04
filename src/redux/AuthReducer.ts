import {Dispatch} from "redux";
import { authAPI } from "../API/API";

type UserDataType = {
    id: string | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type SetUserData = {
    type: 'SET_USER_DATA'
    payload: {
        data: {
            id: string
            login: string
            email: string
        }
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
//AC
export const AuthReducer = (state: UserDataType = initialState, action: ActionType): UserDataType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ... action.payload.data,
                isAuth: true
            }
        default:
            return state
    }
}

const setUserDataSuccess = (id: string, email: string, login: string): SetUserData => ({
    type: SET_USER_DATA,
    payload: {
        data: {
            id,
            email,
            login
        }
    }
})
//TC
export const setUserData = () => (dispatch: Dispatch<ActionType>) => {
    authAPI.me()
        .then((res) => {
            const {id, email, login} = res.data;
            if (res.resultCode === 0) {
                dispatch(setUserDataSuccess(id, email, login))
            }
        })
}