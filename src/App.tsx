import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import { DialogsContainer } from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from './Components/Header/HeaderContainer';


function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-content'>
                    <Route path='/Profile/:userID?' render={()=> <ProfileContainer/>}/>
                    <Route path='/Dialogs' render={()=> <DialogsContainer/>}/>
                    <Route path='/Users' render={()=> <UsersContainer/>}/>
                    <Route path='/News' render={()=> <News/>}/>
                    <Route path='/Music' render={()=> <Music/>}/>
                    <Route path='/Settings' render={()=> <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
