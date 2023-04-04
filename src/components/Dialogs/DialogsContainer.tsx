import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {ActionType, DialogType, MessageType } from "../../redux/state";
import Dialogs from "./Dialogs";

type DialogsPropsType = {
    state: {
        dialogs: DialogType[],
        messages: MessageType[],
        newMessageBody: string,
    },
    dispatch: (action: ActionType) => void,
}

const DialogsContainer = (props: any) => {
    // const {
    //     state: {dialogs, messages, newMessageBody},
    //     dispatch,
    // } = props;

    let state = props.store.getState().dialogsPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    const onNewMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(text));
    }

    return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
};

export default DialogsContainer;