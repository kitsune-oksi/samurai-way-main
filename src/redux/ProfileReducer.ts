import {Dispatch} from "redux";
import {profileAPI} from "../API/API";

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

export type AddPostType = {
    type: typeof ADD_POST
}
export type UpdateNewPostType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
export type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: any
}

type ActionType = AddPostType | UpdateNewPostType | setUserProfileType | ReturnType<typeof setStatus>

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS'

const initialState: ProfilePageType = {
    posts: [
        {id: 1, post: 'Hello world'}
    ],
    newPostMessage: '',
    profile: null,
    status: ''
}

export const ProfileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action?.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: state.posts.length + 1,
                post: state.newPostMessage
            }
            return {...state, posts: [...state.posts, newPost], newPostMessage: ''}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostMessage: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_USER_STATUS:
            return {...state, status: action.status ? action.status : ''}
        default:
            return state
    }
}
//AC
export const addPostActionCreator = (): AddPostType => ({
    type: ADD_POST
})
export const updateNewPostActionCreator = (text: string): UpdateNewPostType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
const setUserProfile = (profile: any): setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
})
const setStatus = (status: any) => ({
    type: SET_USER_STATUS,
    status
} as const)
//TC
export const getUserProfile = (userID: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.getProfile(userID)
        .then(data => {
                dispatch(setUserProfile(data));
            }
        );
}
export const getStatus = (userID: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.getStatus(userID)
        .then((data) => {
                dispatch(setStatus(data));
            }
        );
}
export const updateStatus = (status: string) => (dispatch: Dispatch<ActionType>) => {
    profileAPI.setStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0)
                dispatch(setStatus(status));
            }
        );
}
