import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {LoginType} from "../../state/reducers/authReducer";
import React, {useState} from "react";
import AccountMenu from "../common/AccountMenu/AccountMenu";
import cs from "../common/common.module.css";
import {Icon} from "@iconify/react";

type HeaderPropsType = {
    isAuth: boolean
    login: LoginType
    logoutTC: () => void
}

const Header = ({isAuth, login, logoutTC}: HeaderPropsType) => {
    const headerStyle = !isAuth
        ? `${s.header} ${s.headerLogin}`
        : s.header

    const linkStyle = !isAuth
        ? `${cs.link} ${cs.loginLink}`
        : cs.link

    const iconColor = '#ffffff'

    return (
        <header className={`${headerStyle}`}>
            <div className={s.loginBlock}>
                {
                    isAuth
                        ? <>
                            <AccountMenu login={login} logout={logoutTC}/>
                        </>
                        : <NavLink to="/login" className={`${linkStyle}`} activeClassName={cs.active}>
                            <div className={s.loginIcon}>
                                <Icon icon="uil-comments" color={iconColor}/>
                            </div>
                            <span>Login</span>
                        </NavLink>
                }
            </div>
        </header>
    );
};

export default Header;



