import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import React from "react";
import {UserType} from "../../redux/UsersReducer";
import styles from './User.module.css'

export class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalUsersCount(response.data.totalCount)
                }
            );
    }

    onPageChanged(pageNumber: number) {
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                    this.props.setUsers(response.data.items);
                }
            );
    }

    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return <div>
            {pages.map((p) => {
                return <span className={p === this.props.currentPage ? styles.selectedPage : ''}
                onClick={()=>{this.onPageChanged(p)}}>{p}</span>
            })}
            {this.props.users.map((u: UserType) => <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt='avatar'
                             className={styles.userPhoto}/>
                    </div>
                    <div>
                        <div>{u.name}</div>
                    </div>
                    <div>
                        {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                    </div>
                </div>
            )}
        </div>
    }
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