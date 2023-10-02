import {connect} from "react-redux";
import {RootState} from "../../state/store";
import {
    follow,
    UsersPageType,
    getUsers,
    unfollow
} from "../../state/UsersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

class UsersContainer extends React.Component<UsersType, RootState> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(pageNumber: number) {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users users={this.props.users}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged.bind(this)}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingProgress={this.props.followingProgress}
            />
        </>
    }
}

const mapStateToProps = (state: RootState): UsersPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowing: state.usersPage.isFollowing,
        followingProgress: state.usersPage.followingProgress
    }
}

export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer)

//types
type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}
export type UsersType = UsersPageType & MapDispatchToPropsType