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

export const setUserData = (id: string, email: string, login: string): SetUserData => ({
    type: SET_USER_DATA,
    payload: {
        data: {
            id,
            email,
            login
        }
    }
})
