import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../../redux/ProfileReducer';
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppDispatch, ProfilePageType, RootState} from "../../../redux/redux-store";

// export const MyPostsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState().profilePage;
//
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//
//                 const onPostChange = (text: string) => {
//                     let action = updateNewPostActionCreator(text);
//                     store.dispatch(action)
//                 }
//                 return (
//                     <div>
//                         <MyPosts addPost={addPost} updateNewPostText={onPostChange}
//                                  posts={state.posts} newPostMessage={state.newPostMessage}
//                         />
//                     </div>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

type MapStateToPropsType = {
    profilePage: ProfilePageType
}

type MapDispatchToPropsType = {
    addPost: () => void
    updateNewPostText: (text: string) => void
}

export type ProfileType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);