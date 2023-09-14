import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":
            "1690be4a-0b2f-42a4-9e71-302df103dbfe"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => res.data)
    },
    unfollowUser (userID: number) {
        return instance.delete(`follow/${userID}`)
            .then(res => res.data)
    },
    followUser (userID: number) {
        return instance.post(`follow/${userID}`)
            .then(res => res.data)
    }
}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
            .then(res => res.data)
    },
    logIn (email: string, password: string, rememberMe?: boolean, captcha?: boolean) {
        return instance.post<ResponseType<{userId: number}>> ('auth/login', {email, password, rememberMe, captcha})
            .then(res => res.data)
    },
    logOut () {
        return instance.delete<ResponseType>('auth/login')
            .then(res => res.data)
    }
}

export const profileAPI = {
    getProfile (userID: string) {
        return instance.get(`profile/${userID}`)
            .then( res => res.data)
    },
    getStatus (userID: string) {
        return instance.get(`profile/status/${userID}`)
            .then((res)=> res.data)
    },
    setStatus (status: string) {
        return instance.put(`profile/status`, {status})
            .then(res => res.data)
    }
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: []
    data: T
}