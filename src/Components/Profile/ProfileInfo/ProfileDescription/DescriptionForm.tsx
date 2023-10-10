import React from "react";
import {ProfileType} from "../../../../state/ProfileReducer";
import {Button} from "../../../common/Button/Button";

type Props = {
    profile: ProfileType
    editModeHandler: (isEdit: boolean) => void
}

export const DescriptionForm: React.FC<Props> = ({profile, editModeHandler}) => {
    return <div>
        <Button title={'Save'} callback={()=>editModeHandler(false)}/>
        FORM
    </div>;
}