import React from 'react';
import {useFormik} from "formik";

type FormikErrorType = {
    message?: string
}

type PropsType = {
    submit: (text: string) => void,
}

const DialogForm: React.FC<PropsType> = ({ submit}) => {

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.message) {
                errors.message = 'Required'
            }

            return errors
        },
        onSubmit: values => {
            submit(values.message);
            formik.resetForm()
        },

    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div><textarea placeholder={'Enter your message'}
                               name={'message'}
                               onChange={formik.handleChange}
                               value={formik.values.message}/>
                </div>

                {formik.touched.message && formik.errors.message ?
                    <div style={{color: 'red'}}>{formik.errors.message}</div> : null}

                <div>
                    <button type={'submit'}>send</button>
                </div>
            </form>
        </div>
    );
};

export default DialogForm;