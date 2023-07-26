import {useDispatch} from "react-redux";
import LoginForm from "./LoginForm";



const Login = () => {
    const dispatch = useDispatch()

    const submit = () => {
        // dispatch(loginTC(values))
    }

    return (
        <div>
            <div>
                <h1>Login</h1>
                <LoginForm submit={submit}/>
            </div>
        </div>
    );
};

export default Login;
