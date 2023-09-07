import React, {ComponentType} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, ProfileType} from "../../redux/ProfileReducer";
import {RootState} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

export type ProfileContainerStateType = {
    profile: ProfileType | null
}

type ProfileContainerDispatchType = {
    getUserProfile: (userID: string) => void
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
            userID = '2'
        }
        this.props.getUserProfile(userID)
    }

    render() {
        return <Profile profile={this.props.profile}/>;
    }
}

const mapStateToProps = (state: RootState): ProfileContainerStateType => ({
    profile: state.profilePage.profile
})

// const profileContainerWithURL = withRouter(ProfileContainer);

// export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(profileContainerWithURL))

export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
        withRouter,
        withAuthRedirect
    )(ProfileContainer)