import {connect} from "react-redux";
import LoginForm, {FormikErrorType} from "./LoginForm";
import {loginTC} from '../../state/authReducer'
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../state/redux-store";

type PropsType = {
    login: (email: string | undefined, password: string | undefined, rememberMe: boolean | undefined) => void
    isAuth: boolean
}

const Login: React.FC<PropsType> = ({login, isAuth}: PropsType) => {

    const submit = (formData: FormikErrorType) => {
        const {email, password, rememberMe} = formData
        login(email, password, rememberMe)
    }

    if(isAuth) return <Redirect to={'/profile'} />

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
