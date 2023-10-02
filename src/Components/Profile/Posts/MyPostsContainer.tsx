import React from 'react';
import {addPost, ProfilePageType, updateNewPost} from '../../../state/ProfileReducer';
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../../state/store";
import {MyPost} from "./MyPosts";

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}
const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPost())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPost(text))
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPost);

//types
type MapStateToPropsType = {
    profilePage: ProfilePageType
}
type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}
export type ProfileType = MapStateToPropsType & MapDispatchToPropsType