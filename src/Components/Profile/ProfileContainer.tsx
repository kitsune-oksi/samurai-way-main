import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/ProfileReducer";
import {RootState} from "../../redux/redux-store";

export type ProfileContainerStateType = ReturnType<typeof mapStateToProps>

class ProfileContainer extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                    this.props.setUserProfile(response.data)
                }
            );
    }

    render() {
        return <Profile profile = {this.props.profile}/>;
    }
}

const mapStateToProps = (state: RootState) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)