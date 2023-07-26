import React from 'react';
import {useFormik} from "formik";

type PropsType = {
    submit: (post: string) => void
}

type FormikErrorType = {
    post?: string
}

const PostForm: React.FC<PropsType> = ({submit}) => {

    const formik = useFormik({
        initialValues: {
            post: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.post) {
                errors.post = 'Required'
            }

            return errors
        },
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
                                  name={'post'}
                                  onChange={formik.handleChange}
                                  value={formik.values.post}/>
                </div>

                {formik.touched.post && formik.errors.post ?
                    <div style={{color: 'red'}}>{formik.errors.post}</div> : null}

                <button type={'submit'}>Add post</button>
            </form>
        </div>
    );
};

export default PostForm;