import {connect} from "react-redux";
import LoginForm, {FormikErrorType} from "./LoginForm";
import {EmailType, loginTC, PasswordType, RememberMeType} from '../../state/reducers/authReducer'
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../state/redux-store";
import s from "./Login.module.css"
import {Icon} from "@iconify/react";
import React, {useState} from "react";
import logo from "../../asets/images/logo-icon.svg";

type MapStateToPropsType = {
    captchaUrl: string | null | undefined,
    isAuth: boolean,
}

type MapDispatchToPropsType = {
    loginTC: (email: EmailType,
              password: PasswordType,
              rememberMe: RememberMeType,
              captchaUrl: string | null | undefined,
              setStatus: (status: any) => void
    ) => void,
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const Login: React.FC<PropsType> = ({loginTC, isAuth, captchaUrl}: PropsType) => {
    // console.log('Login')
    const [focused, setFocused] = useState<boolean>(false);

    const submit = (formData: FormikErrorType, setStatus: (status: any) => void) => {
        const {email, password, rememberMe, captchaUrl} = formData
        loginTC(email, password, rememberMe, captchaUrl, setStatus)
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={s.login}>
            <div className={s.loginSidebar}>

                <h2 className={s.loginSidebarTitle}>Join us</h2>
                <p className={s.loginSidebarText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                    tellus, luctus.</p>

                <div className={s.loginSidebarIcon}>
                    <div className={s.iconBlock}>
                        <Icon icon="uil-comments"/>
                    </div>
                    <p>
                        <h3>Community</h3>
                        <p>At vero eos et accusamus et.</p>
                    </p>
                </div>
                <div className={s.loginSidebarIcon}>
                    <div className={s.iconBlock}>
                        <Icon icon="uil-play"/>
                    </div>
                    <p>
                        <h3>Music</h3>
                        <p>At vero eos et accusamus et.</p>
                    </p>
                </div>
                <div className={s.loginSidebarIcon}>
                    <div className={s.iconBlock}>
                        <Icon icon="uil-newspaper"/>
                    </div>
                    <p>
                        <h3>News</h3>
                        <p>At vero eos et accusamus et.</p>
                    </p>
                </div>
            </div>

            <div className={s.loginForm}>
                <div className={s.loginLogo}>
                    <img src={logo} alt=""/>
                </div>
                <h2 className={s.loginSidebarTitle}>Welcome</h2>
                <p>Join gazillions of people online</p>
                <LoginForm submit={submit} captchaUrl={captchaUrl} focused={focused} setFocused={setFocused}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {loginTC})(Login);
