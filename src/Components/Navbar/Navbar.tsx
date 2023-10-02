import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar () {
    return (
        <nav className={s.nav}>
            <ul style={{listStyle: "none", padding: 0}}>
                <li><NavLink to='/Profile' activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to='/Dialogs' activeClassName={s.active}>Dialogs</NavLink></li>
                <li><NavLink to='/Users' activeClassName={s.active}>Users</NavLink></li>
                <li><NavLink to='/News' activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to='/Music' activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}