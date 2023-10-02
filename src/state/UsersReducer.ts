import {AppDispatch} from "./store";
import {usersAPI} from "../api/user.api";

const FOLLOW = 'usersPage/FOLLOW';
const UNFOLLOW = 'usersPage/UNFOLLOW';
const SET_USERS = 'usersPage/SET_USERS';
const SET_PAGE = 'usersPage/SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'usersPage/SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'usersPage/SET_IS_FETCHING';
const SET_FOLLOWING_PROGRESS = 'usersPage/SET_FOLLOWING_PROGRESS';

const initialState: UsersPageType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1,
    isFetching: true,
    isFollowing: false,
    followingProgress: []
}

export const UsersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}
        case UNFOLLOW:
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}
        case SET_USERS:
            return {...state, users: [...action.payload.users]}
        case SET_PAGE:
            return {...state, currentPage: action.payload.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case SET_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingProgress: action.payload.isFollowing ?
                    [...state.followingProgress, action.payload.id]
                    : state.followingProgress.filter((id) => id !== action.payload.id)
            }
        default:
            return state;
    }
}

//AC
const followSuccess = (userID: number) => ({
    type: FOLLOW,
    payload: {
        userID
    }
} as const)
const unfollowSuccess = (userID: number) => ({
    type: UNFOLLOW,
    payload: {
        userID
    }
} as const)
export const setUsers = (users: UserType[]) => ({
    type: SET_USERS,
    payload: {
        users
    }
} as const)
export const setPage = (currentPage: number) => ({
    type: SET_PAGE,
    payload: {
        currentPage
    }
} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {
        totalUsersCount
    }
} as const)
export const setPreloader = (isFetching: boolean) => ({
    type: SET_IS_FETCHING,
    payload: {
        isFetching
    }
} as const)
export const setFollowingProgress = (id: number, isFollowing: boolean) => ({
    type: SET_FOLLOWING_PROGRESS,
    payload: {
        isFollowing,
        id
    }
} as const)

//TC
export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: AppDispatch) => {
    dispatch(setPreloader(true));
    dispatch(setPage(currentPage));
    const data = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setPreloader(false));

}
export const follow = (id: number) => (dispatch: AppDispatch) => {
    return followUnfollowFlow(dispatch, id, true)
}
export const unfollow = (id: number) => (dispatch: AppDispatch) => {
    return followUnfollowFlow(dispatch, id, false)
}

const followUnfollowFlow = async (dispatch: AppDispatch, id: number, isFollow: boolean) => {
    dispatch(setFollowingProgress(id, true));
    if (isFollow) {
        const data = await usersAPI.followUser(id);
        if (data.resultCode === 0) {
            dispatch(followSuccess(id))
        }
    } else {
        const data = await usersAPI.unfollowUser(id);
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(id))
        }
    }
    dispatch(setFollowingProgress(id, false))
}

//types
export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowing: boolean
    followingProgress: Array<null | number>
}
export type UserType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: null,
        large: null
    },
    status: null,
    followed: boolean
}
type ActionType =
    ReturnType<typeof followSuccess> |
    ReturnType<typeof unfollowSuccess> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof setPreloader> |
    ReturnType<typeof setFollowingProgress>


