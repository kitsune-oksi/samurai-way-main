import React from "react";
import {ProfilePropsType} from "../Profile";
import {ProfileStatus} from "./ProfileStatus/ProfileStatus";
import {ProfilePhoto} from "./ProfilePhoto/ProfilePhoto";
import {ProfileDescription} from "./ProfileDescription/ProfileDescription";

export const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, updatePhoto}) => {
    return <>
        <div>
            <ProfilePhoto profile={profile} updatePhoto={updatePhoto} isOwner={isOwner}/>
            <ProfileStatus status={status} updateStatus={updateStatus}/>
            <ProfileDescription profile={profile} isOwner={isOwner}/>
        </div>
    </>
}