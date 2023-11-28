import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {LoginType} from "../../state/reducers/authReducer";
import React, {useState} from "react";
import AccountMenu from "../common/AccountMenu/AccountMenu";

type HeaderPropsType = {
    isAuth: boolean
    login: LoginType
    logoutTC: () => void
}

const Header = ({isAuth, login, logoutTC}: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
            {
                isAuth && <>
                        <AccountMenu login={login} logout={logoutTC}/>
                        {/*{login}*/}
                        {/*<button onClick={logoutTC}>Log out</button>*/}
                    </>

            }
                {/*<NavLink to={'/login'}>Login</NavLink>*/}
            </div>
        </header>
    );
};

export default Header;



