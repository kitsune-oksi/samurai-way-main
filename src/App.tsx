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
import {StoreType} from "./redux/state";

type AppPropsType = {
    store: StoreType
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
                    <Route path='/Profile' render={()=> <Profile addPost={store.addPost.bind(store)} profilePage={state.profilePage} newPostText={store.newPostText.bind(store)}/>}/>
                    <Route path='/Dialogs' render={()=> <Dialogs users={state.dialogsPage.users} messages={state.dialogsPage.messages}/>}/>
                    <Route path='/News' render={()=> <News/>}/>
                    <Route path='/Music' render={()=> <Music/>}/>
                    <Route path='/Settings' render={()=> <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
