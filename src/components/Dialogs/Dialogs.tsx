import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string,
    id: number,
}

type MessagePropsType = {
    message: string,
}

const DialogItem = (props: DialogItemPropsType) => {
    let {name, id} = props;
    let path = '/dialogs/' + id;

    return <>
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path} className={s.link} activeClassName={s.active}>{name}</NavLink>
        </div>
    </>
}

const Message = (props: MessagePropsType) => {
    let {message} = props;
    return <div className={s.message}>{message}</div>
}

type DialogType = {
    id: number,
    name: string,
}

type MessageType = {
    id: number,
    message: string,
}

const Dialogs = () => {

    let dialogsData: DialogType[] = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Valera'},
    ]

    let messagesData: MessageType[] = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi hi'},
        {id: 3, message: 'hi hi hi'},
        {id: 4, message: 'hi hi hi hi'},
    ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

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