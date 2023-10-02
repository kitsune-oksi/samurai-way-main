import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfilePropsType} from "../Profile";
import {ProfileStatus} from "../Status/Status";
import bg from '../../../assets/images/bg.avif'

export const ProfileInfo: React.FC<ProfilePropsType> = ({profile, status, updateStatus}) => {
    return <>
        <div>
            <img className={s.AppBackground} alt='cover'
                 src={bg}/>
        </div>
        <div>
            {profile?.photos.large && <img src={profile?.photos.large} alt={'avatar'}/>}
            <ProfileStatus status={status} updateStatus={updateStatus}/>
        </div>
    </>
}