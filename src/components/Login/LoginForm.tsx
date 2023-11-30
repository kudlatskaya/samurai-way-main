import {useFormik} from "formik";
import {loginFormValidator} from "../../utils/validators";

export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captchaUrl?: string | null
}

type PropsType = {
    submit: (values: FormikErrorType, setStatus: (status: any) => void) => void
    // setStatus: () => void
    captchaUrl: string | null | undefined,
}

const LoginForm: React.FC<PropsType> = ({submit, captchaUrl}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captchaUrl: ''
        },
        validationSchema: loginFormValidator('email', 'password'),
        onSubmit: (values) => {
            submit(values, formik.setStatus)
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

                {formik.status ? <span style={{color: 'red'}}>{formik.status}</span> : null}

                <div>
                    <label htmlFor="rememberMe">
                        <input type='checkbox' name={"rememberMe"} onChange={formik.handleChange}
                               checked={formik.values.rememberMe}/>
                        remember me
                    </label>
                </div>

                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl &&
                    <input {...formik.getFieldProps('captchaUrl')}/>}

                <div>
                    <button type={'submit'}>
                        Login
                    </button>
                </div>
            </form>

    );
};

export default LoginForm
