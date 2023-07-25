import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from './DialogsContainer'
import {Redirect} from "react-router-dom";
import {useFormik} from "formik";

type DialogsPropsType = {
    dialogsPage: {
        dialogs: DialogType[],
        messages: MessageType[],
        newMessageBody: string,
    },
    sendMessage: () => void,
    updateNewMessageBody: (text: string) => void,
    isAuth: boolean
}

type FormikErrorType = {
    message?: string
}

const Dialogs = (props: DialogsPropsType) => {
    const {
        dialogsPage: {dialogs, messages, newMessageBody},
        sendMessage,
        updateNewMessageBody,
        isAuth
    } = props;


    const formik = useFormik({
        initialValues: {
            message: newMessageBody,
        },
        validate: (values) => {
            const errors: FormikErrorType = {}

            if (!values.message) {
                errors.message = 'Required'
            }

            return errors
        },
        onSubmit: values => {
            updateNewMessageBody(values.message);
            sendMessage();
            formik.resetForm()
        },

    })

    let dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map(message => <Message key={message.id} message={message.message}/>);

    if (isAuth) return <Redirect to={'/login'}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements} </div>
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
        </div>
    );
};


export default Dialogs;