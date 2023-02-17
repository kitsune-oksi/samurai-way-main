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
import {newPostText, StateType} from "./redux/state";

type AppPropsType = {
    addPost: ()=>void
    state: StateType
    newPostText: (newText: string)=>void
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header/>
                <Navbar/>
                <div className='app-content'>
                    <Route path='/Profile' render={()=> <Profile addPost={props.addPost} profilePage={props.state.profilePage} newPostText={newPostText}/>}/>
                    <Route path='/Dialogs' render={()=> <Dialogs users={props.state.dialogsPage.users} messages={props.state.dialogsPage.messages}/>}/>
                    <Route path='/News' render={()=> <News/>}/>
                    <Route path='/Music' render={()=> <Music/>}/>
                    <Route path='/Settings' render={()=> <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
