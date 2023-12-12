import {useFormik} from "formik";
import {loginFormValidator} from "../../utils/validators";
import React from "react";
import {Checkbox, FormControlLabel, Input, InputAdornment} from "@mui/material";
import cs from '../common/common.module.css'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import s from './Login.module.css'

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
                <div className={cs.inputBlock}>
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

            {formik.touched.email && formik.errors.email ?
                <div style={{color: 'red'}}>{formik.errors.email}</div> : null}

            <div>
                <div className={cs.inputBlock}>
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

            {formik.touched.password && formik.errors.password ?
                <div style={{color: 'red'}}>{formik.errors.password}</div> : null}

            {formik.status ? <span style={{color: 'red'}}>{formik.status}</span> : null}

            <div className={s.remember}>
                {/*<label htmlFor="rememberMe">*/}
                <FormControlLabel control={<Checkbox defaultChecked/>} label="Remember" name={"rememberMe"}
                                  onChange={formik.handleChange}
                                  checked={formik.values.rememberMe}
                                  sx={{ '& .MuiSvgIcon-root': { fontSize: 23 } }}/>
                {/*<Checkbox {...label} name={"rememberMe"} onChange={formik.handleChange}*/}
                {/*          checked={formik.values.rememberMe}/>*/}
                {/*<input type='checkbox' name={"rememberMe"} onChange={formik.handleChange}*/}
                {/*       checked={formik.values.rememberMe}/>*/}
                {/*    Remember*/}
                {/*</label>*/}

                <span>Lost Password?</span>
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
