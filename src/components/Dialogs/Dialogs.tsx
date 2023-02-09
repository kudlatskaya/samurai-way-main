import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {unstable_renderSubtreeIntoContainer} from "react-dom";

type DialogItemPropsType = {

}

const DialogItem = (props: DialogItemPropsType) => {
    let { name, id } = props;
    let path = '/dialogs/1' + id;

    return <>
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name} </NavLink>
        </div>
    </>
}

const Message = (props) => {
    let {message} = props;
    return <div className={s.message}>{message}</div>
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dimych' id='1'/>
                <DialogItem name='Andrey' id='2'/>
                <DialogItem name='Sasha' id='3'/>
                <DialogItem name='Viktor' id='4'/>
                <DialogItem name='Masha' id='5'/>

            </div>
            <div className={s.messages}>

                <Message >Hi</Message>
                <Message >Hi hi</Message>
                <Message >Hi hi hi</Message>
                <Message >Hi hi hi hi</Message>
            </div>
        </div>
    );
};

export default Dialogs;