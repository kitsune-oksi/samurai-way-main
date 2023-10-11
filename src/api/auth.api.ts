import {AxiosResponse} from "axios";
import {BaseResponseType, instance} from "./common.api";

type LoginData = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}

export const authAPI = {
    me() {
        return instance.get<AxiosResponse<BaseResponseType<LoginData>>>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe?: boolean, captcha?: string) {
        return instance.post<AxiosResponse<BaseResponseType<{ userId: number }>>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(res => res.data)
    },
    logOut() {
        return instance.delete<AxiosResponse<AxiosResponse<BaseResponseType>>>('auth/login')
            .then(res => res.data)
    },
    getCaptcha() {
        return instance.get<AxiosResponse<{ url: string }>>('security/get-captcha-url')
            .then((res => res.data))
    }
}