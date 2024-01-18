import React from 'react';
import {Field, useFormik} from "formik";
import {textareaValidator} from "../../../utils/validators";
import cs from "../../common/common.module.css";
import ps from "../ProfileDataForm/ProfileDataForm.module.css";
import {toggleFocus} from "../../../utils/forms";
import {accentColor, elementBgColor} from "../../../constants";
import {Input, InputAdornment, TextField} from "@mui/material";
import ls from "../../Login/Login.module.css";
import s from "../ProfileDataForm/ProfileDataForm.module.css";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";

type PropsType = {
    submit: (post: string, title: string) => void
}

const PostForm: React.FC<PropsType> = ({submit}) => {

    const formik = useFormik({
        initialValues: {
            post: '',
            title: '',
        },
        validationSchema: textareaValidator('post'),
        onSubmit: values => {
            submit(values.post, values.title);
            formik.resetForm()
        },
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className={s.item}>
                    <label className={s.label} htmlFor="title">Title:</label>
                    <div className={cs.inputBlock}
                         onFocus={(e) => toggleFocus(e, accentColor)}
                         onBlur={(e) => toggleFocus(e, elementBgColor)}>
                        <Input className={cs.inputField}
                               type={"title"} placeholder={"Enter post title"}
                               id="title-input"
                               {...formik.getFieldProps('title')}
                        />
                    </div>
                </div>

                <div className={s.item}>
                    <label className={s.label} htmlFor="title">Post:</label>
                    <div id={'post-input-block'} className={cs.inputBlock}
                         onFocus={(e) => toggleFocus(e, accentColor)}
                         onBlur={(e) => toggleFocus(e, elementBgColor)}>
                        <TextField className={cs.inputField}
                                   type={"post"} placeholder={"Enter your post"}
                                   id="post-input"
                                   multiline
                                   maxRows={10}
                                   {...formik.getFieldProps('post')}
                        />
                    </div>
                </div>

                {/*{formik.errors.post ?*/}
                {/*    <div style={{color: 'red'}}>{formik.errors.post}</div> : null}*/}


                <div className={`${ls.buttonBlock} ${ps.button}`}>
                    <button className={ls.loginButton} type={'submit'}>
                        Add post
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PostForm;