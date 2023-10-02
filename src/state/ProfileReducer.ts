import {Dispatch} from "redux";
import {profileAPI} from "../api/profile.api";

const ADD_POST = 'profilePage/ADD-POST';
const UPDATE_NEW_POST_TEXT = 'profilePage/UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'profilePage/SET_USER_PROFILE';
const SET_USER_STATUS = 'profilePage/SET_USER_STATUS'

const initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'Hello world'}
    ],
    newPostMessage: '',
    profile: null,
    status: ''
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: state.posts.length + 1,
                post: state.newPostMessage
            }
            return {...state, posts: [...state.posts, newPost], newPostMessage: ''}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostMessage: action.payload.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.payload.profile}
        case SET_USER_STATUS:
            return {...state, status: action.payload.status}
        default:
            return state
    }
}
//AC
export const addPost = () => ({
    type: ADD_POST
} as const)
export const updateNewPost = (newText: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    payload: {
        newText
    }
} as const)
const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE,
    payload: {
        profile
    }
} as const)
const setStatus = (status: string) => ({
    type: SET_USER_STATUS,
    payload: {
        status
    }
} as const)

//TC
export const getUserProfile = (userID: string) => async (dispatch: Dispatch<ActionType>) => {
    const data = await profileAPI.getProfile(userID);
    dispatch(setUserProfile(data));
}
export const getStatus = (userID: string) => async (dispatch: Dispatch<ActionType>) => {
    const data = await profileAPI.getStatus(userID);
    dispatch(setStatus(data));
}
export const updateStatus = (status: string) => async (dispatch: Dispatch<ActionType>) => {
    const res = await profileAPI.setStatus(status);
    if (res.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

//types
export type PostType = {
    id: number
    post: string | undefined
}
export type ProfilePageType = {
    posts: PostType[]
    newPostMessage: string
    profile: ProfileType | null
    status: string
}
export type ProfileType = {
    aboutMe: string | null
    contacts:
        { [key: string]: string | null }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    photos:
        {
            small: string | null
            large: string | null
        }
    userId: string
}
type ActionType =
    ReturnType<typeof addPost> |
    ReturnType<typeof updateNewPost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof setStatus>