import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {connect} from "react-redux";
import {RootState} from "./state/store";
import {Preloader} from "./Components/common/Preloader/Preloader";
import {initializeApp} from "./state/AppReducer";
import Login from "./Components/Login/LoginWithReactHookForm";
import HeaderContainer from "./Components/Header/HeaderContainer";

const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'))
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"))
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))

class App extends React.Component<PropsType, RootState> {
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
                        <Switch >
                            <Redirect exact from="/" to="/profile" />
                            <React.Suspense fallback={<div><Preloader/></div>}>
                                <Route path='/profile/:userID?' render={() => <ProfileContainer/>}/>
                                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                                <Route path='/users' render={() => <UsersContainer/>}/>
                            </React.Suspense>
                            <Route path='/news' render={() => <News/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </Switch>
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

//types
type PropsType = mapDispatchToPropsType & mapStateToPropsType
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type mapStateToPropsType = {
    isInitialized: boolean
}
