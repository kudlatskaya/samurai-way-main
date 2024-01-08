import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FilterType} from "../../state/reducers/usersReducer";
import {Input, Select, MenuItem} from "@mui/material";
import cs from "../common/common.module.css";
import {accentColor, elementBgColor} from "../../constants";
import {toggleFocus} from "../../utils/forms";
import s from './Users.module.css';
import ls from '../Login/Login.module.css';

type PropsType = {
    onFilterChanged: (filter: FilterType) => void,
}

type FormType = {
    term: string,
    friend: 'true' | 'false' | 'null'
}

const UsersSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {

    const submit = (values: FormType, {setSubmitting}: { setSubmitting: (isSubmiting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === "true"
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }

    return <div>
        <Formik
            initialValues={{term: '', friend: 'null'}}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    {/*<div className={s.searchContainer}>*/}
                        {/*<Field type="text" name="term"/>*/}
                    <div className={s.searchBlock}>
                        <div id='user-input-block' className={cs.inputBlock}
                             onFocus={(e) => toggleFocus(e, accentColor)}
                             onBlur={(e) => toggleFocus(e, elementBgColor)}>
                            <Input className={cs.inputField}
                                   type={"text"} placeholder={"Enter user name"}
                                   id="user-input"
                            />
                        </div>
                        <div>
                            <button className={`${ls.loginButton} ${s.find}`} type={'submit'} disabled={isSubmitting}>
                                Find
                            </button>
                        </div>
                        <div className={`${cs.inputBlock} ${s.filter}`}
                             onFocus={(e) => toggleFocus(e, accentColor)}
                             onBlur={(e) => toggleFocus(e, elementBgColor)}>
                            <Field as="select" name="friend">
                                <option value="null">All</option>
                                <option value="true">Only followed</option>
                                <option value="false">Only unfollowed</option>
                            </Field>
                        </div>
                        {/*<ErrorMessage name="password" component="div"/>*/}

                    </div>

                    {/*</div>*/}
                </Form>
            )}
        </Formik>
    </div>
})

export default UsersSearchForm