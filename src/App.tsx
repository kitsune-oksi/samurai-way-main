import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import UsersContainer from './Components/Users/UsersContainer';
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from './Components/Header/HeaderContainer';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import Login from './Components/Login/Login';
import {connect} from "react-redux";
import {RootState} from "./redux/redux-store";
import {Preloader} from "./Components/common/Preloader/Preloader";
import {initializeApp} from "./redux/AppReducer";

type PropsType = mapDispatchToPropsType & mapStateToPropsType
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type mapStateToPropsType = {
    isInitialized: boolean
}

class App extends React.Component<PropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='App'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-content'>
                        <Route path='/Profile/:userID?' render={() => <ProfileContainer/>}/>
                        <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/Users' render={() => <UsersContainer/>}/>
                        <Route path='/News' render={() => <News/>}/>
                        <Route path='/Music' render={() => <Music/>}/>
                        <Route path='/Settings' render={() => <Settings/>}/>
                        <Route path='/Login' render={() => <Login/>}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: RootState) => ({
    isInitialized: state.app.isInitialized
})

export default connect(mapStateToProps, {initializeApp})(App)
