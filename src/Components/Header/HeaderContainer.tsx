import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {logOut} from '../../redux/AuthReducer';

export type HeaderContainerStateType = {
    login: string | null
    isAuth: boolean
}

type HeaderContainerDispatchType = {
    logOut: () => void
}

export type HeaderContainerPropsType = HeaderContainerStateType & HeaderContainerDispatchType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render () {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logOut={this.props.logOut}/>
    }
}

const mapStateToProps = (state: RootState):HeaderContainerStateType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth

})

export default connect(mapStateToProps, {logOut})(HeaderContainer)