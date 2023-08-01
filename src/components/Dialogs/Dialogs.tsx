import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from './DialogsContainer'
import {Redirect} from "react-router-dom";
import DialogForm from "./DialogForm";

type DialogsPropsType = {
    dialogsPage: {
        dialogs: DialogType[],
        messages: MessageType[],
    },
    newMessageBody: string,
    sendMessage: (message: string) => void,
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) => {
    const {
        dialogsPage: {dialogs, messages},
        sendMessage,
        isAuth
    } = props;

    let dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map(message => <Message key={message.id} message={message.message}/>);

    // должно быть !isAuth
    // if (!isAuth) return <Redirect to={'/login'}/>

    const submit = (message: string) => {
        sendMessage(message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements} </div>
                <DialogForm submit={submit}/>
            </div>
        </div>
    );
};


export default Dialogs;