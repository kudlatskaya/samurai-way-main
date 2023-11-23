import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../asets/images/logo-icon.svg'
import avatar from '../../asets/images/avatar.jpg'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.logoBlock}>
                <img src={logo} alt=""/>
                <p className={s.title}>Social Network</p>
                <div className={s.userInfo}>
                    <div className={s.avatar}>
                        <img src={avatar} alt=""/>
                    </div>
                </div>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/profile/28736" className={s.link} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/users" className={s.link} activeClassName={s.active}>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/news" className={s.link} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/music" className={s.link} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/settings" className={s.link} activeClassName={s.active}>Settings</NavLink>
            </div>

        </nav>
    );
};

export default Navbar;