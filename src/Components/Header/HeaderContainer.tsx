import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import { setUserData } from '../../redux/AuthReducer';
import {UsersAPI} from "../../API/UsersAPI";

export type HeaderContainerStateType = {
    login: string | null
    isAuth: boolean
}

type HeaderContainerDispatchType = {
    setUserData: (id: string, email: string, login: string) => void
}

type HeaderContainerPropsType = HeaderContainerStateType & HeaderContainerDispatchType


class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        UsersAPI.getAuth()
            .then((data) => {
                const {id, email, login} = data;
                if (data.resultCode === 0) {
                    this.props.setUserData(id, email, login)
                }
            })
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