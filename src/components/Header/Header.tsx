import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {LoginType, logoutTC} from "../../state/reducers/authReducer";

import UserName from "../common/UserName/UserName";
import React, {useState} from "react";
import BasicMenu from "../common/AccountMenu/AccountMenu";
import AccountMenu from "../common/AccountMenu/AccountMenu";

type HeaderPropsType = {
    isAuth: boolean
    login: LoginType
    logoutTC: () => void
}

const Header = ({isAuth, login, logoutTC}: HeaderPropsType) => {
    const [toggleMenu, setToggleMenu] = useState<boolean>(false)

    const showMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <header className={s.header}>
            <div className={s.loginBlock} onClick={showMenu}>
            {
                isAuth
                    ? <>
                        <AccountMenu login={login}/>


                        {/*{login}*/}
                        {/*<button onClick={logoutTC}>Log out</button>*/}
                    </>
                    : <NavLink to={'/login'}>Login</NavLink>
            }
            </div>

            {/*{*/}
            {/*    toggleMenu && <AccountMenu />*/}
            {/*}*/}
        </header>
    );
};

export default Header;



