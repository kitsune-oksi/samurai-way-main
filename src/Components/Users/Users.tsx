import userPhoto from '../../assets/images/user.png'
import React from "react";
import {UserType} from "../../state/UsersReducer";
import styles from './User.module.css'
import {NavLink} from "react-router-dom";

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
    let pageCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map((p, index) => {
            return <span key={index} className={p === currentPage ? styles.selectedPage : ''}
                         onClick={() => {
                             onPageChanged(p)
                         }}>{p}</span>
        })}
        {users.map((u) => <div key={u.id}>
                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt='avatar'
                             className={styles.userPhoto}/>
                    </NavLink>
                </div>
                <div>
                    <div>{u.name}</div>
                </div>
                <div>
                    {u.followed ? <button disabled={followingProgress.some((id) => id === u.id)} onClick={() => {
                            unfollow(u.id)
                        }}
                        >Unfollow</button> :
                        <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {
                            follow(u.id)
                        }
                        }>Follow</button>}
                </div>
            </div>
        )}
    </div>
}

// export const Users: React.FC<UsersType> = (props) => {
//
//     const {usersPage: {users}, follow, unfollow, setUsers} = props;
//     const getUsers = () => {
//         if (users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
//                 response => {
//                     // debugger
//                     setUsers(response.data.items);
//                 }
//             )
//         }
//     }
//
//     return <div>
//         <button onClick={getUsers}>Get users</button>
//         {users.map(u => <div key={u.id}>
//                 <div>
//                     <img src={u.photos.small != null ? u.photos.small : userPhoto} width='70px' alt='avatar'/>
//                 </div>
//                 <div>
//                     <div>{u.name}</div>
//                 </div>
//                 <div>
//                     {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> :
//                         <button onClick={() => follow(u.id)}>Follow</button>}
//                 </div>
//             </div>
//         )}
//     </div>
// }