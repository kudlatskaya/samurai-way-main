import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../asets/images/logo-icon.svg'
import {Icon} from '@iconify/react';
import Avatar from "../common/Avatar/Avatar";

const Navbar = () => {
    const iconColor = "#838daa";

    return (
        <nav className={s.nav}>
            <div className={s.logoBlock}>
                <img src={logo} alt=""/>
                <p className={s.title}>Social Network</p>
                <div className={s.userInfo}>
                    <Avatar/>
                    <div className={`${s.active} ${s.login}`}>
                        <NavLink to="/profile/28736" className={s.link}
                                 activeClassName={s.active}>@kudlatskaya</NavLink>
                        <p className={s.member}>Member</p>
                        <div className={s.connections}>
                            <div><span className={s.count}>0</span><p className={s.mute}>Friends</p></div>
                            <div><span className={s.count}>3</span><p className={s.mute}>Groups</p></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={s.menu}>
                <div className={s.item}>
                    <NavLink to="/dialogs" className={s.link} activeClassName={s.active}>
                        <Icon icon="uil-comments" color={iconColor}/>
                        <p>Messages</p>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" className={s.link} activeClassName={s.active}>
                        <Icon icon="uil-user" color={iconColor}/>
                        <p>Users</p></NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={s.link} activeClassName={s.active}>
                        <Icon icon="uil-newspaper" color={iconColor}/>
                        <p>News</p>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={s.link} activeClassName={s.active}>
                        <Icon icon="uil-play" color={iconColor}/>
                        <p>Music</p>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" className={s.link} activeClassName={s.active}>
                        <Icon icon="mi:settings" color={iconColor}/>
                        <p>Settings</p>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;