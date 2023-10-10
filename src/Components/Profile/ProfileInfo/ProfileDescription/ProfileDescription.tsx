import {DescriptionForm} from "./DescriptionForm";
import {DescriptionData} from "./DescriptionData";
import React, {useState} from "react";
import {ProfileType} from "../../../../state/ProfileReducer";

type Props = {
    isOwner: boolean
    profile: ProfileType
}

export const ProfileDescription: React.FC<Props> = ({isOwner, profile}) => {

    const [editMode, setEditMode] = useState(false);

    const editModeHandler = (isEdit: boolean) => {
        setEditMode(isEdit)
    }

    return <div>
        {isOwner && editMode ?
            <DescriptionForm profile={profile} editModeHandler={editModeHandler}/> :
            <DescriptionData profile={profile} editModeHandler={editModeHandler} isOwner={isOwner}/>}
    </div>
}