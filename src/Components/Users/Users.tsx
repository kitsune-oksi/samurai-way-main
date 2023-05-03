
import {UsersType} from "./UsersContainer";

export const Users: React.FC<UsersType> = (props) => {

    const {usersPage: {users}, follow, unfollow} = props;

    return <div>
        {users.map(u => <div key={u.id}>

                <span>{u.fullName}</span>
                <div>
                    {u.followed ? <button onClick={()=>unfollow(u.id)}>Unfollow</button> : <button onClick={()=>follow(u.id)}>Follow</button>}
                </div>
                <div>
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                </div>
                <div>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </div>
            </div>
         )}
    </div>
}