import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import { HeaderContainerStateType } from './HeaderContainer';
import logo from '../../assets/images/logo.png'

export const Header: React.FC<PropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img className={s.AppLogo} alt='logo'
                 src={logo}/>
            <div className={s.loginBlock}>
                {isAuth ? <div>{login} <button onClick={logout}>Logout</button></div> : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

//types
type PropsType = HeaderContainerStateType & {logout: () => void}