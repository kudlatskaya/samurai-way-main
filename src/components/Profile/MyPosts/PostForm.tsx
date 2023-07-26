import React from 'react';
import {useFormik} from "formik";
import {textareaValidator} from "../../../utils/validators";

type PropsType = {
    submit: (post: string) => void
}

const PostForm: React.FC<PropsType> = ({submit}) => {

    const formik = useFormik({
        initialValues: {
            post: '',
        },
        validationSchema: textareaValidator('post'),
        onSubmit: values => {
            submit(values.post);
            formik.resetForm()
        },
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <textarea placeholder={'Enter your post'}
                              {...formik.getFieldProps('post')} />
                </div>

                {formik.touched.post && formik.errors.post ?
                    <div style={{color: 'red'}}>{formik.errors.post}</div> : null}

                <button type={'submit'}>Add post</button>
            </form>
        </div>
    );
};

export default PostForm;