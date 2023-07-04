import {DialogType, MessageType} from "../components/Dialogs/DialogsContainer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Viktor'},
        {id: 5, name: 'Masha'},
        {id: 6, name: 'Valera'},
    ] as DialogType[],
    messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi hi'},
        {id: 3, message: 'hi hi hi'},
        {id: 4, message: 'hi hi hi hi'},
    ] as MessageType[],
    newMessageBody: '',
}

type StateType = typeof initialState

type ActionType = SendMessageActionCreatorType | UpdateNewMessageBodyActionCreatorType

const dialogsReducer = (state: StateType = initialState, action: ActionType): StateType => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:

            return {
                ...state,
                newMessageBody: action.newText
            };

        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: 5,
                message: state.newMessageBody,
            }

            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, newMessage]
            };

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
