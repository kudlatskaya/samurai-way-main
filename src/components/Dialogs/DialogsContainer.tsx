import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import {ActionType, DialogType, MessageType} from "../../redux/state";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";
import React from "react";

type DialogsPropsType = {
    store: {
        dispatch: (action: ActionType) => void,
    }
}

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState();

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                const onNewMessageChange = (text: string) => {
                    store.dispatch(updateNewMessageBodyActionCreator(text));
                }

                return <Dialogs updateNewMessageBody={onNewMessageChange}
                                sendMessage={onSendMessageClick}
                                dialogsPage={state.dialogsPage}/>
            }
        }
    </StoreContext.Consumer>
};

export default DialogsContainer;