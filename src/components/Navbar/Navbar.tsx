import React from 'react';
import s from './Navbar.module.css';
import cs from '../common/common.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../asets/images/logo-icon.svg'
import {Icon} from '@iconify/react';
import Avatar from "../common/Avatar/Avatar";
import UserName from "../common/UserName/UserName";

const Navbar = () => {


    return (
        <nav className={s.nav}>
            <div className={s.logoBlock}>
                <img src={logo} alt=""/>
                <p className={s.title}>Social Network</p>
                <div className={s.userInfo}>
                    <div className={s.avatarBlock}>
                        <Avatar/>
                    </div>
                    <div className={`${cs.active} ${s.login}`}>
                        <UserName login={'kudlatskaya'} url={"/profile/28736"}/>
                        {/*<NavLink to="/profile/28736" className={s.link}*/}
                        {/*         activeClassName={s.active}>@kudlatskaya</NavLink>*/}
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
                    <NavLink to="/dialogs" className={cs.link} activeClassName={cs.active}>
                        <Icon icon="uil-comments" />
                        <p>Messages</p>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" className={cs.link} activeClassName={cs.active}>
                        <Icon icon="uil-user"/>
                        <p>Users</p></NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" className={cs.link} activeClassName={cs.active}>
                        <Icon icon="uil-newspaper" />
                        <p>News</p>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" className={cs.link} activeClassName={cs.active}>
                        <Icon icon="uil-play" />
                        <p>Music</p>
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" className={cs.link} activeClassName={cs.active}>
                        <Icon icon="mi:settings" />
                        <p>Settings</p>
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;