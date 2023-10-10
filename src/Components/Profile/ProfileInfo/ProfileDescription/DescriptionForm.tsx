import React from "react";
import {ProfileType} from "../../../../state/ProfileReducer";
import {Button} from "../../../common/Button/Button";
import {SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

type Props = {
    profile: ProfileType
    editModeHandler: (isEdit: boolean) => void
    updateDescription: (descriptionModel: ProfileType) => Promise<void>
    getUserProfile: (userID: string) => void
}

const schema = yup.object({
    FullName: yup.string().required(),
    AboutMe: yup.string().required(),
    lookingForAJob: yup.boolean().default(true).required(),
    LookingForAJobDescription: yup.string(),
    contacts: yup.object({
        facebook: yup.string().url(),
        github: yup.string().url(),
        instagram: yup.string().url(),
        mainLink: yup.string().url(),
        twitter: yup.string().url(),
        vk: yup.string().url(),
        website: yup.string().url(),
        youtube: yup.string().url(),
    })
})

type FormData = yup.InferType<typeof schema>;

export const DescriptionForm: React.FC<Props> = ({profile, editModeHandler, updateDescription, getUserProfile}) => {

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    const onSubmit: SubmitHandler<FormData> = (data) => {
        const descriptionModel = {
            userId: profile.userId,
            photos: profile.photos,
            ...data
        }
        updateDescription(descriptionModel as ProfileType).then(()=>{
            editModeHandler(false)
            getUserProfile(profile.userId);
        });
    }

    return <div>
        <Button title={'Save'} callback={handleSubmit(onSubmit)}/>
        <form>
            <label><strong>Full name: </strong><input
                defaultValue={profile.fullName} {...register('FullName')} /></label>
            <p>{errors.FullName?.message}</p>
            <label><strong>About me: </strong><input defaultValue={profile.aboutMe} {...register('AboutMe')} /></label>
            <label><strong>Looking for a job: </strong><input type={'checkbox'}
                                                              checked={profile.lookingForAJob} {...register('lookingForAJob')} /></label>
            <label><strong>Description: </strong><input
                defaultValue={profile.lookingForAJobDescription}  {...register('LookingForAJobDescription')} /></label>
            <label> <strong>Contacts: </strong>
                {Object.keys(profile.contacts).map((el, index) => <div key={index}>
                    <label><strong>{el}: </strong>
                        <input defaultValue={profile.contacts[el]}  {...register(`contacts.${el}`)} />
                    </label>
                    <p>{errors.contacts?.[el].message}</p>
                </div>)}
            </label>
        </form>
    </div>;
}