import {DialogType, MessageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type StateType = {
    dialogs: DialogType[],
    messages: MessageType[],
    newMessageBody: string,
}

let initialState: StateType = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Valera'},
    ],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi hi'},
        {id: 3, message: 'hi hi hi'},
        {id: 4, message: 'hi hi hi hi'},
    ],
    newMessageBody: '',
}

type ActionType = SendMessageActionCreatorType | UpdateNewMessageBodyActionCreatorType

const dialogsReducer = (state = initialState, action: ActionType): StateType => {
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

type SendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE} as const)

type UpdateNewMessageBodyActionCreatorType = ReturnType<typeof updateNewMessageBodyActionCreator>

export const updateNewMessageBodyActionCreator = (text: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newText: text} as const)

export default dialogsReducer;
