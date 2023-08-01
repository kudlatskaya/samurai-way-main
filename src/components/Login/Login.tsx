import {connect} from "react-redux";
import LoginForm, {FormikErrorType} from "./LoginForm";
import {EmailType, loginTC, PasswordType, RememberMeType} from '../../state/authReducer'
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../state/redux-store";

type MapStateToPropsType = {
    isAuth: boolean
}

type MapDispatchToPropsType = {
    loginTC: (email: EmailType,
            password: PasswordType,
            rememberMe: RememberMeType ,
            setStatus: (status: any) => void
    ) => void
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

const Login: React.FC<PropsType> = ({loginTC, isAuth}: PropsType) => {

    const submit = (formData: FormikErrorType, setStatus: (status: any) => void) => {
        const {email, password, rememberMe} = formData
        loginTC(email, password, rememberMe, setStatus)
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <div>
                <h1>Login</h1>
                <LoginForm submit={submit}/>
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth
})

export default connect(mapStateToProps, {loginTC})(Login);
