import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route} from "react-router-dom";
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
                        <React.Suspense fallback={<div><Preloader/></div>}>
                            <Route path='/Profile/:userID?' render={() => <ProfileContainer/>}/>
                            <Route path='/Dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/Users' render={() => <UsersContainer/>}/>
                        </React.Suspense>
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

//types
type PropsType = mapDispatchToPropsType & mapStateToPropsType
type mapDispatchToPropsType = {
    initializeApp: () => void
}
type mapStateToPropsType = {
    isInitialized: boolean
}
