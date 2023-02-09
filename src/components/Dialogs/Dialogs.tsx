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
    let { name, id } = props;
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

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id={1}/>
                <DialogItem name='Andrey' id={2}/>
                <DialogItem name='Sasha' id={3}/>
                <DialogItem name='Viktor' id={4}/>
                <DialogItem name='Masha' id={5}/>
            </div>

            <div className={s.messages}>
                <Message message='hi'/>
                <Message message='hi hi'/>
                <Message message='hi hi hi'/>
                <Message message='hi hi hi hi'/>
            </div>
        </div>
    );
};

export default Dialogs;