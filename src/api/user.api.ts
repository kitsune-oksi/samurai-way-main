import {AxiosResponse} from "axios";
import {instance} from "./common.api";
import {BaseResponseType} from './common.api'

export const usersAPI = {
    getUsers(currentPage: number = 1, pageSize: number = 10) {
        return instance.get<AxiosResponse<BaseResponseType<GetUserType>>>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollowUser(userID: number) {
        return instance.delete<AxiosResponse<BaseResponseType>>(`follow/${userID}`)
            .then(res => res.data)
    },
    followUser(userID: number) {
        return instance.post<AxiosResponse<BaseResponseType>>(`follow/${userID}`)
            .then(res => res.data)
    }
}

//types
type GetUserType = {
    items: UserType[]
    totalCount: number
    error: null | string
}
type UserType = {
    id: number
    name: string
    status: string | null
    photos:
        {
            small: string
            large: string
        }
    followed: boolean
}