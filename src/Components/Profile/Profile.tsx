import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPostsContainer";
import {ProfileType} from "../../state/ProfileReducer";

export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (photo: any) => void
}

export const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, updatePhoto}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} updatePhoto={updatePhoto}/>
            <MyPostsContainer/>
        </div>
    )
}