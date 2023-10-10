import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updatePhoto, updateStatus} from "../../state/ProfileReducer";
import {RootState} from "../../state/store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component<PropsType, RootState> {

    refreshProfile() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            if (this.props.autorizedUserID) {
                userID = this.props.autorizedUserID
            } else {
                this.props.history.push('/Login')
            }

        }
        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<RootState>) {
        if (prevProps.match.params.userID !== this.props.match.params.userID) {
            this.refreshProfile()
        }
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status}
                        updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userID} updatePhoto={this.props.updatePhoto}/>;
    }
}

const mapStateToProps = (state: RootState): ProfileContainerStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserID: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, updatePhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

//types
type ProfileContainerStateType = {
    profile: ProfileType
    status: string
    autorizedUserID: string | null
    isAuth: boolean
}
type ProfileContainerDispatchType = {
    getUserProfile: (userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (status: string) => void
    updatePhoto: (photo: any) => void
}
type ProfileContainerPropsType = ProfileContainerStateType & ProfileContainerDispatchType
type PathParamsType = {
    userID: string
}
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType