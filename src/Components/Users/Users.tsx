import {UsersType} from "./UsersContainer";
import axios from "axios";
import userPhoto from '../../assets/images/user.png'

export const Users: React.FC<UsersType> = (props) => {

    const {usersPage: {users}, follow, unfollow, setUsers} = props;
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(
            response => {
                // debugger
                setUsers(response.data.items);
            }
        )
    }

    return <div>
        {users.map(u => <div key={u.id}>
                <div>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} width='70px' alt='avatar'/>
                </div>
                <div>
                    <div>{u.name}</div>
                </div>
                <div>
                    {u.followed ? <button onClick={() => unfollow(u.id)}>Unfollow</button> :
                        <button onClick={() => follow(u.id)}>Follow</button>}
                </div>
            </div>
        )}
    </div>
}