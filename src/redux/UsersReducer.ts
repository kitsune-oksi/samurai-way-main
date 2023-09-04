import {usersAPI} from "../API/API";
import {Dispatch} from "redux";

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
    // id: number
    // fullName: string
    // followed: boolean
    // status: string
    // location: LocationType

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

// type LocationType = {
//     city: string
//     country: string
// }

//type FollowACType = ReturnType<typeof followAC>

//type UnfollowACType = ReturnType<typeof unfollowAC>

type FollowACType = {
    type: typeof FOLLOW
    payload: {
        userID: number
    }
}

type UnfollowACType = {
    type: typeof UNFOLLOW
    payload: {
        userID: number
    }
}

//type SetUsersACType = ReturnType<typeof setUsersAC>

type SetUsersACType = {
    type: typeof SET_USERS
    payload: {
        users: UserType[]
    }
}

type SetPageACType = {
    type: typeof SET_PAGE
    payload: {
        currentPage: number
    }
}

type setTotalUsersCountACType = {
    type: typeof SET_TOTAL_USERS_COUNT
    payload: {
        totalUsersCount: number
    }
}

type setIsFetchingACType = {
    type: typeof SET_IS_FETCHING
    payload: {
        isFetching: boolean
    }
}

type setFollowingProgressACType = {
    type: typeof SET_FOLLOWING_PROGRESS
    payload: {
        id: number
        isFollowing: boolean
    }
}


type ActionType =
    FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetPageACType
    | setTotalUsersCountACType
    | setIsFetchingACType
    | setFollowingProgressACType;

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_FOLLOWING_PROGRESS = 'SET_FOLLOWING_PROGRESS';

const initialState: UsersPageType = {
    users: [
        // {
        //     id: 1,
        //     fullName: 'Ingvarr',
        //     followed: true,
        //     status: 'I am the best',
        //     location: {city: 'New-York', country: 'USA'}
        // },
        // {
        //     id: 2,
        //     fullName: 'Oxi',
        //     followed: false,
        //     status: 'I am the best too',
        //     location: {city: 'New-York', country: 'USA'}
        // },
        // {
        //     id: 3,
        //     fullName: 'Marci',
        //     followed: true,
        //     status: 'I am the best of the best',
        //     location: {city: 'Novocherkassk', country: 'Russia'}
        // }
    ],
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
const followSuccess = (userID: number): FollowACType => ({
    type: FOLLOW,
    payload: {
        userID
    } as const
})
const unfollowSuccess = (userID: number): UnfollowACType => ({
    type: UNFOLLOW,
    payload: {
        userID
    } as const
})
export const setUsers = (users: UserType[]): SetUsersACType => ({
    type: SET_USERS,
    payload: {
        users
    } as const
})
export const setPage = (currentPage: number): SetPageACType => ({
    type: SET_PAGE,
    payload: {
        currentPage
    } as const
})
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {
        totalUsersCount
    } as const
})
export const setPreloader = (isFetching: boolean): setIsFetchingACType => ({
    type: SET_IS_FETCHING,
    payload: {
        isFetching
    } as const
})
export const setFollowingProgress = (id: number, isFollowing: boolean): setFollowingProgressACType => ({
    type: SET_FOLLOWING_PROGRESS,
    payload: {
        isFollowing,
        id
    } as const
})
//TC
export const getUsers = (currentPage: number, pageSize: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setPreloader(true));
    dispatch(setPage(currentPage));
    usersAPI.getUsers(currentPage, pageSize)
        .then(data => {
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
                dispatch(setPreloader(false));
            }
        );
}
export const follow = (id: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setFollowingProgress(id, true));
    usersAPI.unfollowUser(id)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollowSuccess(id))
            }
            dispatch(setFollowingProgress(id, false))
        })
}
export const unfollow = (id: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setFollowingProgress(id, true));
    usersAPI.followUser(id)
        .then((data) => {
            if (data.resultCode === 0) {
                dispatch(followSuccess(id))
            }
            dispatch(setFollowingProgress(id, false))
        })
}


