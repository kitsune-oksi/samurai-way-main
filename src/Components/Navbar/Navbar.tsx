import React from 'react';
import n from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar () {
    return (
        <nav className={n.nav}>
            <ul style={{listStyle: "none", padding: 0}}>
                <li><NavLink to='/Profile' activeClassName={n.active}>Profile</NavLink></li>
                <li><NavLink to='/Dialogs' activeClassName={n.active}>Dialogs</NavLink></li>
                <li><NavLink to='/News' activeClassName={n.active}>News</NavLink></li>
                <li><NavLink to='/Music' activeClassName={n.active}>Music</NavLink></li>
                <li><NavLink to='/Settings' activeClassName={n.active}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}