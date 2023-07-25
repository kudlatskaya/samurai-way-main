import {useDispatch} from "react-redux";
import {Field, Form, useFormik} from "formik";

type FormikErrorType = {
    login?: string
    password?: string
    rememberMe?: boolean
}

const LoginForm = () => {
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.login) {
                errors.login = 'Required'
            }

            if (!values.password) {
                errors.password = 'Required'
            } else if (values.password.length <= 3) {
                errors.password = 'Invalid password'
            }
            return errors
        },
        onSubmit: values => {
            // dispatch(loginTC(values))
            formik.resetForm()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="login"
                       {...formik.getFieldProps('login')}
                />
            </div>

            {formik.touched.login && formik.errors.login ?
                <div style={{color: 'red'}}>{formik.errors.login}</div> : null}

            <div>
                <input type="password"
                        {...formik.getFieldProps('password')}/>
            </div>

            {formik.touched.password && formik.errors.password ?
                <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

            <div>
                <label htmlFor="rememberMe">
                    <input type='checkbox'  name={"rememberMe"}  onChange={formik.handleChange} checked={formik.values.rememberMe} />
                    remember me
            </label>
            </div>
            <div>
                <button type={'submit'}>
                    Login
                </button>
            </div>
        </form>
    );
};

const Login = () => {
    return (
        <div>
            <div>
                <h1>Login</h1>
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;

// import {Field, InjectedFormProps, reduxForm} from "redux-form";
//
// type FormDataType = {
//     login: string
//     password: string
//     rememberMe: boolean
// }
//
// const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field name={'login'} placeholder={"Login"} component={'input'}/>
//             </div>
//             <div>
//                 <Field name={'password'} placeholder={"Password"} component={'input'}/>
//             </div>
//             <div>
//                 <label> <Field name={'rememberMe'} type="checkbox" component={'input'}/>remember me</label>
//             </div>
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     );
// };
//
// const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)
//
// const Login = () => {
//      const onSubmit = (formData: FormDataType) => {
//          // console.log(formData)
//      }
//
//     return (
//         <div>
//             <div>
//                 <h1>Login</h1>
//                 <LoginReduxForm onSubmit={onSubmit}/>
//             </div>
//         </div>
//     );
// };
//
// export default Login;