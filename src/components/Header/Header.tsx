import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {LoginType, logoutTC} from "../../state/reducers/authReducer";
import Avatar from "../common/Avatar/Avatar";
import UserName from "../common/UserName/UserName";
import React from "react";

type HeaderPropsType = {
    isAuth: boolean
    login: LoginType
    logoutTC: () => void
}

const Header = ({isAuth, login, logoutTC}: HeaderPropsType) => {

    return (
        <header className={s.header}>
            {/*<div className={s.loginBlock}>*/}
            {
                isAuth
                    ? <>

                        <Avatar/>

                        <UserName login={login}/>
                        {/*{login}*/}
                        {/*<button onClick={logoutTC}>Log out</button>*/}

                    </>
                    : <NavLink to={'/login'}>Login</NavLink>
            }
            {/*</div>*/}
        </header>
    );
};

export default Header;



