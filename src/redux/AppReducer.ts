import {AppDispatch} from "./redux-store";
import {getAuthUserData} from "./AuthReducer";

type SetInitialized = {
    type: 'SET_INITIALIZED'
}
type ActionType = SetInitialized;
type InitialStateType = typeof initialState

const initialState = {
    isInitialized: false
}

const SET_INITIALIZED = 'SET_INITIALIZED'

export const  AppReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized: true
            }
        default:
            return state
    }
}
//AC
const setInitialized = (): SetInitialized => ({
    type: SET_INITIALIZED
})

//TC
export const initializeApp = () => (dispatch: AppDispatch) => {
    dispatch(getAuthUserData())
        .then( () => {
            dispatch(setInitialized())}
        )
}