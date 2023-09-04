import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import { setUserData } from '../../redux/AuthReducer';

export type HeaderContainerStateType = {
    login: string | null
    isAuth: boolean
}

type HeaderContainerDispatchType = {
    setUserData: () => void
}

type HeaderContainerPropsType = HeaderContainerStateType & HeaderContainerDispatchType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        this.props.setUserData()
    }

    render () {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

const mapStateToProps = (state: RootState):HeaderContainerStateType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth

})

export default connect(mapStateToProps, {setUserData})(HeaderContainer)