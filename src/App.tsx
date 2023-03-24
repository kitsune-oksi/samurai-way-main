import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {ActionType} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";
import { Store } from 'redux';
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';

type AppPropsType = {
    store: Store<ReduxStoreType, ActionType>
}

function App(props: AppPropsType) {
    // const {store} = props;
    // const state = store.getState();
    debugger
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Route path='/Profile' render={()=> <Profile store={props.store}/>}/>
                    <Route path='/Dialogs' render={()=> <DialogsContainer store={props.store}/>}/>
                    <Route path='/News' render={()=> <News/>}/>
                    <Route path='/Music' render={()=> <Music/>}/>
                    <Route path='/Settings' render={()=> <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
