import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {
    followAC, setIsFetchingAC,
    setPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UsersPageType,
    UserType
} from "../../redux/UsersReducer";
import React from "react";
import axios from "axios";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType[]) => void
    setPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setPreloader: (isFetching: boolean) => void
}

export type UsersType = UsersPageType & MapDispatchToPropsType

class UsersContainer extends React.Component<UsersType> {

    componentDidMount() {
        this.props.setPreloader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.setPreloader(false)
                }
            );
    }

    onPageChanged(pageNumber: number) {
        this.props.setPreloader(true)
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (currentPage) => {
            dispatch(setPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setPreloader: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)