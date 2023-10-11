import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../state/store";
import {logout} from '../../state/AuthReducer';

class HeaderContainer extends React.Component<HeaderContainerPropsType, RootState> {

    render () {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state: RootState):HeaderContainerStateType => ({
    login: state.auth.login,
    isAuth: state.auth.isAuth

})

export default connect(mapStateToProps, {logout})(HeaderContainer)

//types
export type HeaderContainerStateType = {
    login: string | null
    isAuth: boolean
}
type HeaderContainerDispatchType = {
    logout: () => void
}
export type HeaderContainerPropsType = HeaderContainerStateType & HeaderContainerDispatchType