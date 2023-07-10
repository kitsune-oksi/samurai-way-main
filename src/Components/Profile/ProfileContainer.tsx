import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserProfile} from "../../redux/ProfileReducer";
import {RootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

export type ProfileContainerStateType = {
    profile: ProfileType | null
}

type ProfileContainerDispatchType = {
    setUserProfile: (profile: ProfileContainerStateType) => void}

type ProfileContainerPropsType = ProfileContainerStateType & ProfileContainerDispatchType

type PathParamsType = {
    userID: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = '2'
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
            .then(response => {
                    this.props.setUserProfile(response.data)
                }
            );
    }

    render() {
        return <Profile profile = {this.props.profile}/>;
    }
}

const mapStateToProps = (state: RootState): ProfileContainerStateType => ({
    profile: state.profilePage.profile
})

const profileContainerWithURL = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(profileContainerWithURL)