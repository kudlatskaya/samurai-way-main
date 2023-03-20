import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {
    ActionType,
    DialogType,
    MessageType,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/state";

type DialogsPropsType = {
    state: {
        dialogs: DialogType[],
        messages: MessageType[],
        newMessageBody: string,
    },
    dispatch: (action: ActionType) => void,
}

const Dialogs = (props: DialogsPropsType) => {
    const {
        state: {dialogs, messages, newMessageBody},
        dispatch,
    } = props;

    let dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map(message => <Message key={message.id} message={message.message}/>);

    const onSendMessageClick = () => {
        dispatch(sendMessageActionCreator());
    }

    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.target.value;
        dispatch(updateNewMessageBodyActionCreator(text));
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