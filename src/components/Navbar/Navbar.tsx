import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a href="/profile">Profile</a>
            </div>
            <div className={s.item}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={s.item}>
                <a href="src/components">News</a>
            </div>
            <div className={s.item}>
                <a href="src/components">Music</a>
            </div>
            <div className={s.item}>
                <a href="src/components">Settings</a>
            </div>
        </nav>
    );
};
//asd
export default Navbar;