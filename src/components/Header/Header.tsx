import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {LoginType, logoutTC} from "../../state/reducers/authReducer";
import Avatar from "../common/Avatar/Avatar";

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
                    isAuth
                        ? <>
                            <div>
                                <Avatar/>
                                {login}
                                {/*<button onClick={logoutTC}>Log out</button>*/}
                            </div>
                        </>
                        : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;



