import {Field, InjectedFormProps, reduxForm} from "redux-form";

type LoginFormPropsType = {
    handleSubmit: () => void
}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'} placeholder={"Login"} component={'input'}/>
            </div>
            <div>
                <Field name={'password'} placeholder={"Password"} component={'input'}/>
            </div>
            <div>
                <label> <Field name={'rememberMe'} type="checkbox" component={'input'}/>remember me</label>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const Login = () => {
     const onSubmit = (formData: FormDataType) => {
         console.log(formData)
     }

    return (
        <div>
            <div>
                <h1>Login</h1>
                <LoginReduxForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
};

export default Login;