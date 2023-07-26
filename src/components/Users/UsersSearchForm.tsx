import {ErrorMessage, Field, Form, Formik} from "formik";

type UsersSearchFormDataType = {
    term: string
}

const UsersSearchForm = () => {
    const submit = (values: UsersSearchFormDataType, {setSubmitting}: { setSubmitting: (isSubmiting: boolean) => void }) => {

    }

    return <div>
        <Formik
            initialValues={{term: ''}}
            validate={values => {
                const errors = {};
                return errors;
            }}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <ErrorMessage name="password" component="div"/>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
}

export default UsersSearchForm