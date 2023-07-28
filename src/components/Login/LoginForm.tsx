import {useFormik} from "formik";
import {loginFormValidator} from "../../utils/validators";

export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

type PropsType = {
    submit: (values: FormikErrorType) => void
}

const LoginForm: React.FC<PropsType> = ({submit}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validationSchema: loginFormValidator('email', 'password'),
        onSubmit: values => {
            submit(values)
            formik.resetForm()
        },
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <input type="email"
                       {...formik.getFieldProps('email')}
                />
            </div>

            {formik.touched.email && formik.errors.email ?
                <div style={{color: 'red'}}>{formik.errors.email}</div> : null}

            <div>
                <input type="password"
                       {...formik.getFieldProps('password')}/>
            </div>

            {formik.touched.password && formik.errors.password ?
                <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

            <div>
                <label htmlFor="rememberMe">
                    <input type='checkbox' name={"rememberMe"} onChange={formik.handleChange}
                           checked={formik.values.rememberMe}/>
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

export default LoginForm
