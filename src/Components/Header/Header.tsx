import React from 'react';
import h from './Header.module.css';
import {NavLink} from "react-router-dom";
import { HeaderContainerStateType } from './HeaderContainer';

type PropsType = HeaderContainerStateType & {logOut: () => void}

export function Header(props: PropsType) {
    return (
        <header className={h.header}>
            <img className={h.AppLogo} alt='logo'
                 src='https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png'/>
            <div className={h.loginBlock}>
                {props.isAuth ? <div>{props.login} <button onClick={props.logOut}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}