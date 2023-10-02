import {AxiosResponse} from "axios";
import {BaseResponseType, instance} from "./common.api";

export const authAPI = {
    me() {
        return instance.get<AxiosResponse<BaseResponseType<{ id: number, email: string, login: string }>>>(`auth/me`)
            .then(res => res.data)
    },
    login(email: string, password: string, rememberMe?: boolean, captcha?: boolean) {
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
    }
}