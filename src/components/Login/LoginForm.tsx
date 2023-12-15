import {useFormik} from "formik";
import {loginFormValidator} from "../../utils/validators";
import React, {FocusEvent, useState} from "react";
import {Checkbox, FormControlLabel, Input, InputAdornment} from "@mui/material";
import cs from '../common/common.module.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import s from './Login.module.css'
import {accentColor, elementBgColor, errorColor, iconColor} from "../../constants";

export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captchaUrl?: string | null
}

type PropsType = {
    submit: (values: FormikErrorType, setStatus: (status: any) => void) => void
    captchaUrl: string | null | undefined
}

const LoginForm: React.FC<PropsType> = ({submit, captchaUrl}) => {

    const toggleFocus = (e: FocusEvent<HTMLDivElement>, color: string) => {
        e.currentTarget.style.borderColor = color
    }

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
                <div className={cs.inputBlock}
                     onFocus={(e) => toggleFocus(e, accentColor)}
                     onBlur={(e) => toggleFocus(e, elementBgColor)}>
                    <Input className={cs.inputField}
                           type={"email"} placeholder={"email"}
                           id="input-with-icon-adornment"
                           {...formik.getFieldProps('email')}
                           startAdornment={
                               <InputAdornment position="start">
                                   <PermIdentityIcon/>
                               </InputAdornment>
                           }
                    />
                </div>
            </div>

            <div>
                <div className={cs.inputBlock}
                     onFocus={(e) => toggleFocus(e, accentColor)}
                     onBlur={(e) => toggleFocus(e, elementBgColor)}>
                    <Input className={cs.inputField}
                           type={"password"} placeholder={"password"}
                           id="input-with-icon-adornment"
                           {...formik.getFieldProps('password')}
                           startAdornment={
                               <InputAdornment position="start">
                                   <VpnKeyOutlinedIcon sx={{fontSize: 20}}/>
                               </InputAdornment>
                           }
                    />
                </div>
            </div>

            {formik.status ? <span className={s.error}>{formik.status}</span> : null}

            <div className={s.remember} style={{marginTop: formik.status ? '0px' : '27px'}}>
                <FormControlLabel control={<Checkbox defaultChecked sx={{
                    color: iconColor,
                    '&.Mui-checked': {
                        color: elementBgColor,
                        backgroundColor: accentColor
                    },
                }}/>} label="Remember" name={"rememberMe"}
                                  onChange={formik.handleChange}
                                  checked={formik.values.rememberMe}
                                  sx={{'& .MuiSvgIcon-root': {fontSize: 23}}}
                />
                <a className={cs.link}>Lost Password?</a>
            </div>

            {
                captchaUrl &&
                <div className={s.captcha}>
                    <img src={captchaUrl}/>
                    <div className={cs.inputBlock}
                         onFocus={(e) => toggleFocus(e, accentColor)}
                         onBlur={(e) => toggleFocus(e, elementBgColor)}>
                        <Input className={cs.inputField}
                               {...formik.getFieldProps('captchaUrl')}
                        />
                    </div>
                </div>
            }

            <div>
                <button className={s.loginButton} type={'submit'}>
                    Log into your account
                </button>
            </div>
        </form>
    );
};

export default LoginForm
