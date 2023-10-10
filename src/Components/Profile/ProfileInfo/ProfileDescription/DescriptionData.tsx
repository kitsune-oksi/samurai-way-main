import React from "react";
import {ProfileType} from "../../../../state/ProfileReducer";
import {Button} from "../../../common/Button/Button";

type Props = {
    profile: ProfileType
    editModeHandler: (isEdit: boolean) => void
    isOwner: boolean
}

export const DescriptionData: React.FC<Props> = ({profile, editModeHandler, isOwner}) => {
    return <div>
        {isOwner && <Button title={'Edit description'} callback={()=>editModeHandler(true)}/>}
        <div><strong>Full name:</strong> {profile.fullName}</div>
        <div><strong>Looking for a job:</strong> {profile.lookingForAJob ? 'Yes' : 'No'}</div>
        <div>{profile.lookingForAJobDescription}</div>
        <div> <strong>Contacts:</strong> {Object.keys(profile.contacts).map((el) => <div><strong>{el}:</strong> {profile.contacts[el]}</div>)}</div>
    </div>;
}