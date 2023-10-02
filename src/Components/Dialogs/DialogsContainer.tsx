import React, {ComponentType} from 'react';
import {DialogsPageType, sendNewMessage, updateNewMessageText} from "../../state/DialogsReducer";
import {Dialogs} from "./Dialogs";
import {AppDispatch, RootState} from "../../state/store";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        sendMessage: () => {
            dispatch(sendNewMessage())
        },
        changeMessage: (text: string) => {
            dispatch(updateNewMessageText(text))
        }
    }
}
export default compose<ComponentType>(
    connect (mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

//types
type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    sendMessage: () => void
    changeMessage: (text: string) => void
}
export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType