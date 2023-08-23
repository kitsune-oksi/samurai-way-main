import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {
    follow, setPreloader,
    setPage,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UsersPageType,
    UserType, setFollowingProgress
} from "../../redux/UsersReducer";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {UsersAPI} from "../../API/UsersAPI";

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setPreloader: (isFetching: boolean) => void
    setFollowingProgress: (id: number, isFollowing: boolean) => void
}

export type UsersType = UsersPageType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersType> {

    componentDidMount() {
        this.props.setPreloader(true)
        UsersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                    this.props.setUsers(data.items);
                    this.props.setTotalUsersCount(data.totalCount)
                    this.props.setPreloader(false)
                }
            );
    }

    onPageChanged(pageNumber: number) {
        this.props.setPreloader(true)
        this.props.setPage(pageNumber);
        UsersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                    this.props.setUsers(data.items);
                    this.props.setPreloader(false)
                }
            );
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
                   setFollowingProgress={this.props.setFollowingProgress}
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

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setPage, setTotalUsersCount, setPreloader, setFollowingProgress
})(UsersContainer)