import {Users} from "./Users";
import {connect} from "react-redux";
import {AppDispatch, RootState} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UsersPageType, UserType} from "../../redux/UsersReducer";

type MapStateToPropsType = {
    usersPage: UsersPageType
}

type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: UserType) => void
}

export type UsersType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)