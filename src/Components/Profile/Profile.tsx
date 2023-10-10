import React from 'react';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPostsContainer";
import {ProfileType} from "../../state/ProfileReducer";

export type ProfilePropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    updatePhoto: (photo: File) => void
    updateDescription: (descriptionModel: ProfileType) => Promise<void>
    getUserProfile: (userID: string) => void

}

export const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, updatePhoto, updateDescription, getUserProfile}) => {
    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} isOwner={isOwner} updatePhoto={updatePhoto} updateDescription={updateDescription} getUserProfile={getUserProfile}/>
            <MyPostsContainer/>
        </div>
    )
}