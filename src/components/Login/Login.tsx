import {connect} from "react-redux";
import LoginForm, {FormikErrorType} from "./LoginForm";
import {EmailType, loginTC, PasswordType, RememberMeType} from '../../state/reducers/authReducer'
import {NavLink, Redirect} from "react-router-dom";
import {AppStateType} from "../../state/redux-store";
import s from "./Login.module.css"
import cs from "../common/common.module.css"
import {Icon} from "@iconify/react";
import React from "react";
import {iconColor} from '../../constants';

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
    // let loginStyle = {};


    const submit = (formData: FormikErrorType, setStatus: (status: any) => void) => {
        const {email, password, rememberMe, captchaUrl} = formData
        loginTC(email, password, rememberMe, captchaUrl, setStatus)
    }

    if (isAuth) return <Redirect to={'/profile'}/>


    // const wrapperStyle = !isAuth
    //     ? 'app-wrapper' + ` wrapperDirection`
    //     : 'app-wrapper'

    return (
        <div className={s.login}>
            <div className={s.loginSidebar}>

                    <p className={s.loginSidebarTitle} >Join us</p>
                    <p className={s.loginSidebarText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus.</p>

                        <div className={s.loginSidebarIcon}>
                            <Icon icon="uil-comments" color={iconColor}/>
                            <p>Community</p>
                        </div>
                        <div className={s.loginSidebarIcon}>
                            <Icon icon="uil-comments" color={iconColor}/>
                            <p>Music</p>
                        </div>
                        <div className={s.loginSidebarIcon}>
                            <Icon icon="uil-comments" color={iconColor}/>
                            <p>News</p>
                        </div>


            </div>
            <div className={s.loginForm}>
                <div>


                    <LoginForm submit={submit} captchaUrl={captchaUrl}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth,
})

export default connect(mapStateToProps, {loginTC})(Login);
