import React from 'react';
import {ReduxStoreType} from "./redux/redux-store";
import {ActionType} from "./redux/store";
import {Store} from "redux";

type ProviderType = {
    store: Store<ReduxStoreType, ActionType>
    children: React.ReactNode
}

const StoreContext = React.createContext({} as Store<ReduxStoreType, ActionType>);

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value = {props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext