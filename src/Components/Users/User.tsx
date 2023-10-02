import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import styles from "./User.module.css";
import React from "react";

export const User: React.FC<PropsType> = ({id, photos, name, followingProgress, followed, unfollow, follow}) => {
    return <div>
        <div>
            <NavLink to={'/profile/' + id}>
                <img src={photos.small !== null ? photos.small : userPhoto} alt='avatar'
                     className={styles.userPhoto}/>
            </NavLink>
        </div>
        <div>
            <div>{name}</div>
        </div>
        <div>
            {followed ? <button disabled={followingProgress.some((id) => id === id)} onClick={() => {
                    unfollow(id)
                }}
                >Unfollow</button> :
                <button disabled={followingProgress.some(id => id === id)} onClick={() => {
                    follow(id)
                }
                }>Follow</button>}
        </div>
    </div>
}

type PropsType = {
    id: number
    photos: {
        small: null | string
        large: null | string
    }
    name:string
    followingProgress: (number | null)[]
    followed: boolean
    unfollow: (userID: number) => void
    follow: (userID: number) => void
}