import React from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {DialogType, PostType} from "../../index";

type DialogsPropsType = {
    dialogs: DialogType[],
}

type MessageType = {
    id: number,
    message: string,
}

const Dialogs = (props: DialogsPropsType) => {
    const {dialogs} = props;

    let messagesData: MessageType[] = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi hi'},
        {id: 3, message: 'hi hi hi'},
        {id: 4, message: 'hi hi hi hi'},
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = messagesData.map(message => <Message message={message.message} /> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    );
};

export default Dialogs;