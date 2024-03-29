import userPhoto from "../../../../assets/images/user.png";
import React, {ChangeEvent} from "react";
import {ProfileType} from "../../../../state/ProfileReducer";

type Props = {
    profile: ProfileType
    isOwner: boolean
    updatePhoto: (photo: File) => void

}

export const ProfilePhoto: React.FC<Props> = ({profile, isOwner, updatePhoto}) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        const {target:{files}} = e;
        if (files && files[0]) {
            updatePhoto(files[0])
        }
    }

  return <div>
      {<img src={profile?.photos.large || userPhoto} alt={'avatar'}/>}
      {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
  </div>
}