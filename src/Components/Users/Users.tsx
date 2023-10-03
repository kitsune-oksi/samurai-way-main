import React from "react";
import {UserType} from "../../state/UsersReducer";
import {Pagination} from "../common/Pagination/Pagination";
import {User} from "./User";

export const Users: React.FC<UsersPropsType> = ({
                                                    totalUsersCount,
                                                    pageSize,
                                                    currentPage,
                                                    onPageChanged,
                                                    users,
                                                    unfollow,
                                                    follow,
                                                    followingProgress,
                                                }) => {
    return <div>
        <Pagination totalItemsCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                    onPageChanged={onPageChanged} portionSize={20}/>
        {users.map((u) => <User id={u.id} name={u.name} followingProgress={followingProgress} followed={u.followed}
                                follow={follow} unfollow={unfollow} photos={u.photos}/>)}
    </div>
}

//types
type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UserType[]
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    followingProgress: Array<null | number>
}