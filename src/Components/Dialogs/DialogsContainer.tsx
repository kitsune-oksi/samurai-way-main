import React, {ComponentType} from 'react';
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppDispatch, DialogsPageType, RootState} from "../../redux/redux-store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

// export const DialogsContainer = () => {
//
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const state = store.getState().dialogsPage;
//
//                 const sendMessage = () => {
//                     store.dispatch(sendNewMessageActionCreator())
//                 }
//
//                 const changeMessage = (text: string) => {
//                     let action = updateNewMessageTextActionCreator(text)
//                     store.dispatch(action)
//                 }
//                 return (
//                     <div className={d.Dialogs}>
//                         <Dialogs sendMessage={sendMessage} changeMessage={changeMessage}
//                                  users={state.users} messages={state.messages} newMessageText={state.newMessageText}/>
//                     </div>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchToPropsType = {
    sendMessage: () => void
    changeMessage: (text: string) => void
}

export type DialogsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendNewMessageActionCreator())
        },
        changeMessage: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

// export const DialogsContainer = withAuthRedirect(connect (mapStateToProps, mapDispatchToProps) (Dialogs));

export default compose<ComponentType>(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)