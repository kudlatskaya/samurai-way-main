import {connect} from "react-redux";
import LoginForm, {FormikErrorType} from "./LoginForm";
import {EmailType, loginTC, PasswordType, RememberMeType} from '../../state/reducers/authReducer'
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../state/redux-store";

type MapStateToPropsType = {
    captchaUrl: string | null | undefined,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    loginTC: (email: EmailType,
              password: PasswordType,
              rememberMe: RememberMeType,
              captchaUrl: string | null | undefined,
              setStatus: (status: any) => void
    ) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const Login: React.FC<PropsType> = ({loginTC, isAuth, captchaUrl}: PropsType) => {

    const submit = (formData: FormikErrorType, setStatus: (status: any) => void) => {
        const {email, password, rememberMe, captchaUrl} = formData
        loginTC(email, password, rememberMe, captchaUrl, setStatus)
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <div>
                <h1>Login</h1>
                <LoginForm submit={submit} captchaUrl={captchaUrl}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    captchaUrl: state.authReducer.captchaUrl,
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);
