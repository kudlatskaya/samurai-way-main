import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FilterType} from "../../state/reducers/usersReducer";

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
            friend: values.friend === 'null' ? null : values.friend === "true" ? true : false
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
                    <Field type="text" name="term"/>
                    <Field as="select" name="friend">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                    <ErrorMessage name="password" component="div"/>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik>
    </div>
})

export default UsersSearchForm