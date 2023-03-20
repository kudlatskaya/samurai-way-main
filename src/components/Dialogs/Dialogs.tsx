import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, MessageType} from "../../redux/state";

type DialogsPropsType = {
    state: {
        dialogs: DialogType[],
        messages: MessageType[],
    }
}

const Dialogs = (props: DialogsPropsType) => {
    const {
        state: {dialogs, messages}
    } = props;

    let dialogsElements = dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>);

    let messagesElements = messages.map(message => <Message key={message.id} message={message.message}/>);

    const onSendMessageClick = () => {
        
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                <div> {messagesElements} </div>
                <div>
                    <div><textarea placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={ () => {alert('ku')} }>send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;