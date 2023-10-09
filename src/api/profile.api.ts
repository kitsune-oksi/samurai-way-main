import {AxiosResponse} from "axios";
import {ProfileType} from "../state/ProfileReducer";
import {BaseResponseType, instance} from "./common.api";

export const profileAPI = {
    getProfile(userID: string) {
        return instance.get<AxiosResponse<BaseResponseType<ProfileType>>>(`profile/${userID}`)
            .then(res => res.data)
    },
    getStatus(userID: string) {
        return instance.get<AxiosResponse<BaseResponseType<string>>>(`profile/status/${userID}`)
            .then((res) => res.data)
    },
    setStatus(status: string) {
        return instance.put<AxiosResponse<BaseResponseType>>(`profile/status`, {status})
            .then(res => res.data)
    },
    setPhoto(photoFile: File) {
        const formData = new FormData();
        formData.append('image', photoFile)
        return instance.put<AxiosResponse<BaseResponseType<{ photos: { small: string, large: string } }>>>(`profile/photo`, formData, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(res => res.data)
    }
}