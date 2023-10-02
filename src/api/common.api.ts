import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    headers: {
        "API-KEY":
            "1690be4a-0b2f-42a4-9e71-302df103dbfe"
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

//types
export type BaseResponseType<T = {}> = {
    resultCode: number
    messages: [] | string[]
    data: T
}