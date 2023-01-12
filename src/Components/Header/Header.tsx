import React from 'react';
import h from './Header.module.css';

export function Header() {
    return (
        <header className={h.header}><img className={h.AppLogo} alt='logo'
                                          src='https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png'/>
        </header>
    )
}