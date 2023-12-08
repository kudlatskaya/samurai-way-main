import {Field, useFormik} from "formik";
import {loginFormValidator} from "../../utils/validators";
import {Icon} from "@iconify/react";
import React, {FocusEventHandler, MouseEventHandler} from "react";
import {Input, InputAdornment, TextField} from "@mui/material";
import {iconColor} from "../../constants";
// import AccountCircle from '@mui/icons-material/AccountCircle';
import s from '../common/common.module.css'
import {AccountCircle} from "@mui/icons-material";

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

    // const onClickHandler = (e: MouseEventHandler<HTMLInputElement>) {
    //
    // }

    return (

        <form onSubmit={formik.handleSubmit}>
            <div>
                <div className={s.inputBlock}>
                    {/*<div className={s.inputIconBlock}>*/}
                    {/*    <Icon icon="uil-newspaper" color={iconColor}/>*/}
                    {/*</div>*/}
                    {/*<input type="email" placeholder={"email"}*/}
                    {/*       {...formik.getFieldProps('email')}*/}

                    {/*/>*/}
                    <Input className={s.inputField}
                        type="email" placeholder={"email"}
                        id="input-with-icon-adornment"
                        {...formik.getFieldProps('email')}
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </div>


            </div>

            {formik.touched.email && formik.errors.email ?
                <div style={{color: 'red'}}>{formik.errors.email}</div> : null}

            <div>
                <input type="password" placeholder={"password"}
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
