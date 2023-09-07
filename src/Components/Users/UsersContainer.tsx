import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {
    follow,
    UsersPageType,
    getUsers,
    unfollow
} from "../../redux/UsersReducer";
import React, {ComponentType} from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import { compose } from "redux";

type MapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

export type UsersType = UsersPageType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersType> {

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

// const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
//     return {
//         follow: (userID) => {
//             dispatch(followAC(userID))
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (currentPage) => {
//             dispatch(setPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountAC(totalUsersCount))
//         },
//         setPreloader: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// }

// export default connect(mapStateToProps, {follow, unfollow, getUsers})(UsersContainer)

export default compose<ComponentType>(
    connect(mapStateToProps, {follow, unfollow, getUsers})
)(UsersContainer)