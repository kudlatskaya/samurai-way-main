import {ActionType, MessageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state: any, action: any): any => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newText;
            return state;

        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: 5,
                message: state.newMessageBody,
            }

            state.messages.push(newMessage)
            state.newMessageBody = '';
            return state;

        default:
            return state;
    }
}

export const sendMessageActionCreator = (): ActionType => ({ type: SEND_MESSAGE, })

export const updateNewMessageBodyActionCreator = (text: string): ActionType =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newText: text, })

export default dialogsReducer;
