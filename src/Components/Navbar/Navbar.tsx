import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar () {
    return (
        <nav className={s.nav}>
            <ul style={{listStyle: "none", padding: 0}}>
                <li><NavLink to='/profile' activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to='/dialogs' activeClassName={s.active}>Dialogs</NavLink></li>
                <li><NavLink to='/users' activeClassName={s.active}>Users</NavLink></li>
                <li><NavLink to='/news' activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to='/music' activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to='/settings' activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}