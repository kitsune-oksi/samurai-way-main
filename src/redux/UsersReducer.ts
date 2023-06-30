export type UsersPageType = {
    users: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
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


type ActionType = FollowACType | UnfollowACType | SetUsersACType | SetPageACType | setTotalUsersCountACType;

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_PAGE = 'SET_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

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
    currentPage: 2
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
        default:
            return state;
    }
}

export const followAC = (userID: number): FollowACType  => ({
    type: FOLLOW,
    payload: {
        userID
    } as const
})
export const unfollowAC = (userID: number): UnfollowACType => ({
    type: UNFOLLOW,
    payload: {
        userID
    } as const
})
export const setUsersAC = (users: UserType[]): SetUsersACType => ({
    type: SET_USERS,
    payload: {
        users
    } as const
})
export const setPageAC = (currentPage: number): SetPageACType => ({
    type: SET_PAGE,
    payload: {
        currentPage
    } as const
})
export const setTotalUsersCountAC = (totalUsersCount: number): setTotalUsersCountACType => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: {
        totalUsersCount
    } as const
})

