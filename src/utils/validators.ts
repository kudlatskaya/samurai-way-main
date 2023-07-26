import * as Yup from "yup";

const rules = {
    input: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    textarea: Yup.string()
        .max(1000, 'Too Long!')
        .required('Required'),
}

export const loginFormValidator = (loginInput: string, passwordInput: string) => {
    return Yup.object().shape({
        [loginInput]: rules.input,
        [passwordInput]: rules.input
    })
}

export const textareaValidator = (fieldName: string) => {
    return Yup.object().shape({
        [fieldName]: rules.textarea,
    });
}
