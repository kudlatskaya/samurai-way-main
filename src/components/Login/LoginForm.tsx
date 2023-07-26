import {useFormik} from "formik";
import * as Yup from 'yup';

type FormikErrorType = {
    login?: string
    password?: string
    rememberMe?: boolean
}

type PropsType = {
    submit: (values: FormikErrorType) => void
}

const validationSchema = Yup.object().shape({
    login: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
});

const LoginForm: React.FC<PropsType> = ({submit}) => {

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            rememberMe: false
        },
        validationSchema,
        onSubmit: values => {
            submit(values)
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

export default LoginForm
