import {UsersType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'
import React from "react";
import {UsersPageType, UserType} from "../../redux/UsersReducer";

export class Users extends React.Component<any, any> {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                    this.props.setUsers(response.data.items);
                }
            );
    }

    render() {
        return <div>
            {this.props.usersPage.users.map((u: UserType) => <div key={u.id}>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} width='70px' alt='avatar'/>
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