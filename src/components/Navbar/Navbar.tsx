import React, {useState} from 'react';
import s from './Navbar.module.css';
import cs from '../common/common.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../asets/images/logo-icon.svg'
import {Icon} from '@iconify/react';
import UserFoto from "../common/Avatar/UserFoto";
import UserName from "../common/UserName/UserName";
import {LoginType} from "../../state/reducers/authReducer";

type NavbarPropsType = {
    userFoto: null | string
    userName: LoginType
}

const Navbar = ({userFoto, userName}: NavbarPropsType ) => {

    return (
        <nav className={s.nav}>
            <div className={s.logoBlock}>
                <img src={logo} alt=""/>
                <p className={s.title}>Social Network</p>
                <div className={s.userInfo}>
                    <div className={s.avatarBlock}>
                        <UserFoto userFoto={userFoto}/>
                    </div>
                    <div className={`${cs.active} ${s.login}`}>
                        <UserName login={userName} url={"/profile/28736"}/>

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
                        <Icon icon="majesticons:users-line"/>
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