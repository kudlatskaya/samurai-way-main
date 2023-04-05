import {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    dialogsPage: {
        dialogs: DialogType[],
        messages: MessageType[],
        newMessageBody: string,
    },
    sendMessage: () => void,
    updateNewMessageBody: (text: string) => void,
}

const Dialogs = (props: DialogsPropsType) => {
    const {
        dialogsPage: {dialogs, messages, newMessageBody},
        sendMessage,
        updateNewMessageBody,
    } = props;

    let dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map(message => <Message key={message.id} message={message.message}/>);

    const onSendMessageClick = () => {
        sendMessage();
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        updateNewMessageBody(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements} </div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;