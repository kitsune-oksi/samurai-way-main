import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, ProfileType, updateStatus} from "../../redux/ProfileReducer";
import {RootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

export type ProfileContainerStateType = {
    profile: ProfileType | null
    status: string
}

type ProfileContainerDispatchType = {
    getUserProfile: (userID: string) => void
    getStatus: (userID: string) => void
    updateStatus: (status: string) => void
}

type ProfileContainerPropsType = ProfileContainerStateType & ProfileContainerDispatchType

type PathParamsType = {
    userID: string
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userID = this.props.match.params.userID;
        if (!userID) {
            userID = '19523'
        }
        this.props.getUserProfile(userID)
        this.props.getStatus(userID)
    }

    render() {
        return <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>;
    }
}

const mapStateToProps = (state: RootState): ProfileContainerStateType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

// const profileContainerWithURL = withRouter(ProfileContainer);

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(profileContainerWithURL))

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
        withRouter,
        withAuthRedirect
    )(ProfileContainer)