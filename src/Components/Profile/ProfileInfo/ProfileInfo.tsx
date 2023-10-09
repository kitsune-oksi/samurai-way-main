import s from "./ProfileInfo.module.css";
import React, {ChangeEvent} from "react";
import {ProfilePropsType} from "../Profile";
import {ProfileStatus} from "../Status/Status";
import bg from '../../../assets/images/bg.avif'
import userPhoto from '../../../assets/images/user.png'

export const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, updatePhoto}) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            updatePhoto(e.target.files[0])
        }
    }

    return <>
        <div>
            <img className={s.AppBackground} alt='cover'
                 src={bg}/>
        </div>
        <div>
            {<img src={profile?.photos.large || userPhoto} alt={'avatar'}/>}
            {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>
    </>
}