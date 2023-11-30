import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {LoginType} from "../../state/reducers/authReducer";
import React, {useState} from "react";
import AccountMenu from "../common/AccountMenu/AccountMenu";
import cs from "../common/common.module.css";

type HeaderPropsType = {
    isAuth: boolean
    login: LoginType
    logoutTC: () => void
}

const Header = ({isAuth, login, logoutTC}: HeaderPropsType) => {
    const headerStyle = !isAuth
        ? s.header + `borderBottom: none; `
        : s.header

    return (
        <header className={`${headerStyle}`}>
            <div className={s.loginBlock}>
                {
                    isAuth
                        ? <>
                            <AccountMenu login={login} logout={logoutTC}/>
                            {/*<NavLink to={'/profile/:userId'} className={cs.link}>My account</NavLink>*/}
                            {/*{login}*/}
                            {/*<button onClick={logoutTC}>Log out</button>*/}
                        </>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;



