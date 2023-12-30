import React, {FocusEvent, useEffect} from 'react';
import {useFormik} from "formik";
import {textareaValidator} from "../../utils/validators";
import cs from "../common/common.module.css";
import {accentColor, elementBgColor} from "../../constants";
import {Input, InputAdornment, TextField} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import s from "../Login/Login.module.css";

type PropsType = {
    submit: (text: string) => void,
}

const DialogForm: React.FC<PropsType> = ({ submit}) => {

    const toggleFocus = (e: FocusEvent<HTMLDivElement>, color: string) => {
        e.currentTarget.style.borderColor = color
    }

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema: textareaValidator('message'),
        onSubmit: values => {
            submit(values.message);
            formik.resetForm()
        },
    })

    return (
        <div>
            <form id={'dialog-form'} onSubmit={formik.handleSubmit}>
                {/*<div>*/}
                {/*    <textarea placeholder={'Enter your message'}*/}
                {/*              {...formik.getFieldProps('message')} />*/}
                {/*</div>*/}
                <div>
                    <div id={'message-input-block'} className={cs.inputBlock}
                         onFocus={(e) => toggleFocus(e, accentColor)}
                         onBlur={(e) => toggleFocus(e, elementBgColor)}>
                        <TextField className={cs.inputField}
                                   type={"message"} placeholder={"Enter your message"}
                                   id="message-input"
                                   multiline
                                   maxRows={4}
                                   {...formik.getFieldProps('message')}
                        />
                    </div>
                </div>

                {/*{formik.touched.message && formik.errors.message ?*/}
                {/*    <div style={{color: 'red'}}>{formik.errors.message}</div> : null}*/}

                <div className={s.buttonBlock}>
                    <button className={s.loginButton} type={'submit'}>
                        Send message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DialogForm;