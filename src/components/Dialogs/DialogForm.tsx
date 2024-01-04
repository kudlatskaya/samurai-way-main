import React, {FocusEvent, useEffect} from 'react';
import {useFormik} from "formik";
import {textareaValidator} from "../../utils/validators";
import cs from "../common/common.module.css";
import {accentColor, elementBgColor} from "../../constants";
import {Input, InputAdornment, TextField} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import ls from "../Login/Login.module.css";
import s from "../Dialogs/Dialogs.module.css"

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
        <div className={s.dialogForm}>
            <form id={'dialog-form'} onSubmit={formik.handleSubmit}>
                <div>
                    <div id={'message-input-block'} className={cs.inputBlock}
                         onFocus={(e) => toggleFocus(e, accentColor)}
                         onBlur={(e) => toggleFocus(e, elementBgColor)}>
                        <TextField className={cs.inputField}
                                   type={"message"} placeholder={"Enter your message"}
                                   id="message-input"
                                   multiline
                                   maxRows={10}
                                   {...formik.getFieldProps('message')}
                        />
                    </div>
                </div>

                <div className={ls.buttonBlock}>
                    <button id={'sendMessage'}  className={`${ls.loginButton} ${s.sendMessage}`} type={'submit'}>
                        Send message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default DialogForm;