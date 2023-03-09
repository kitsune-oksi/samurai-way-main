import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {ActionType, StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionType) => void
}

function App(props: AppPropsType) {
    const {store} = props;
    const state = store.getState();
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Route path='/Profile' render={()=> <Profile profilePage={state.profilePage} dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path='/Dialogs' render={()=> <Dialogs dialogsPage={state.dialogsPage} dispatch={store.dispatch.bind(store)}/>}/>
                    <Route path='/News' render={()=> <News/>}/>
                    <Route path='/Music' render={()=> <Music/>}/>
                    <Route path='/Settings' render={()=> <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
