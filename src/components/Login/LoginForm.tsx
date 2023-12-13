import {useFormik} from "formik";
import {loginFormValidator} from "../../utils/validators";
import React, {useCallback, useEffect, useState} from "react";
import {Checkbox, FormControlLabel, Input, InputAdornment} from "@mui/material";
import cs from '../common/common.module.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import s from './Login.module.css'
import {accentColor, elementBgColor, iconColor} from "../../constants";

export type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
    captchaUrl?: string | null
}

type PropsType = {
    submit: (values: FormikErrorType, setStatus: (status: any) => void) => void
    focused: boolean,
    setFocused: (value: boolean) => void,
    captchaUrl: string | null | undefined,
}

const LoginForm: React.FC<PropsType> = ({submit, captchaUrl, focused, setFocused}) => {

    // console.log('LoginForm')
    let inputStyle = `${cs.inputBlock}`

    // const inputElements = document.getElementsByClassName('inputField')
    // console.log(inputElements)

    const focusHandler = () => {
        // console.log('true')
        setFocused(true)
    }

    const blurHandler = () => {
        // console.log('false')
        setFocused(false)
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

            {/*{formik.touched.email && formik.errors.email ?*/}
            {/*    <div style={{color: 'red'}}>{formik.errors.email}</div> : null}*/}

            {/*{*/}
            {/*    formik.touched.email && formik.errors.email*/}
            {/*        ? inputStyle = inputStyle + ` ${cs.inputBlockError}`*/}
            {/*        : inputStyle =`${cs.inputBlock}`*/}
            {/*}*/}
            <div>
                <div className={inputStyle} onFocus={(e) => focusHandler(e)} onBlur={(e) => blurHandler(e)}
                     style={{borderColor: focused ? accentColor : elementBgColor}}>
                    <Input className={cs.inputField}
                           type="email" placeholder={"email"}
                           id="input-with-icon-adornment"
                           {...formik.getFieldProps('email')}
                           startAdornment={

                               <InputAdornment position="start">
                                   <div className={cs.inputIconBlock}>
                                       <PermIdentityIcon/>
                                   </div>
                               </InputAdornment>
                           }
                    />
                </div>
            </div>

            {/*{*/}
            {/*    inputStyle = formik.touched.password && formik.errors.password*/}
            {/*        ? inputStyle + ` ${cs.inputBlockError}`*/}
            {/*        : `${cs.inputBlock}`*/}
            {/*}*/}
            <div>
                <div className={inputStyle} onFocus={focusHandler} onBlur={blurHandler}
                     style={{borderColor: focused ? accentColor : elementBgColor}}
                >
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


            {/*{formik.status ? <span style={{color: 'red'}}>{formik.status}</span> : null}*/}

            <div className={s.remember}>
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

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&
                <input {...formik.getFieldProps('captchaUrl')}/>}

            <div>
                <button type={'submit'}>
                    Log into your account
                </button>
            </div>
        </form>

    );
};

export default LoginForm
