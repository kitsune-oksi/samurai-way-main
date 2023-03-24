import React from 'react';
import d from './Dialogs.module.css'
import {sendNewMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/DialogsReducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage;

                const sendMessage = () => {
                    store.dispatch(sendNewMessageActionCreator())
                }

                const changeMessage = (text: string) => {
                    let action = updateNewMessageTextActionCreator(text)
                    store.dispatch(action)
                }
                return (
                    <div className={d.Dialogs}>
                        <Dialogs sendMessage={sendMessage} changeMessage={changeMessage}
                                 users={state.users} messages={state.messages} newMessageText={state.newMessageText}/>
                    </div>
                )
            }
            }
        </StoreContext.Consumer>
    )
}