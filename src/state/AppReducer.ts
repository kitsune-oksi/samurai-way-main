import {AppDispatch} from "./store";
import {getAuthUserData} from "./AuthReducer";

const initialState = {
    isInitialized: false
}

const SET_INITIALIZED = 'app/SET_INITIALIZED'

export const AppReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
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
const setInitialized = () => ({
    type: SET_INITIALIZED
})

//TC
export const initializeApp = () => async (dispatch: AppDispatch) => {
    await dispatch(getAuthUserData());
    dispatch(setInitialized())
}

//types
type ActionType = ReturnType<typeof setInitialized>;
type InitialStateType = typeof initialState