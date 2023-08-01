import {DialogType, MessageType} from "../../components/Dialogs/DialogsContainer";

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
}

type StateType = typeof initialState

export type ActionType = SendMessageActionCreatorType

const dialogsReducer = (state: StateType = initialState, action: ActionType): StateType => {

    switch (action.type) {

        case SEND_MESSAGE:
            const newMessage: MessageType = {
                id: Math.random(),
                message: action.message,
            }

            return {
                ...state,
                messages: [...state.messages, newMessage]
            };

        default:
            return state;
    }
}

type SendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>
export const sendMessageActionCreator = (message: string) => ({type: SEND_MESSAGE, message} as const)

export default dialogsReducer;
