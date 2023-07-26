import React from 'react';
import {useFormik} from "formik";
import * as Yup from "yup";

type PropsType = {
    submit: (text: string) => void,
}

const validationSchema = Yup.object().shape({
    message: Yup.string()
        .max(1000, 'Too Long!')
        .required('Required'),
});

const DialogForm: React.FC<PropsType> = ({ submit}) => {

    const formik = useFormik({
        initialValues: {
            message: '',
        },
        validationSchema,
        onSubmit: values => {
            submit(values.message);
            formik.resetForm()
        },
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <textarea placeholder={'Enter your message'}
                              {...formik.getFieldProps('message')} />
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