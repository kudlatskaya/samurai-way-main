import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

export type DialogType = {
    id: number,
    name: string,
}

export type MessageType = {
    id: number,
    message: string,
}

type DialogsPageType = {
    dialogs: DialogType[],
    messages: MessageType[],
    newMessageBody: string,
}

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
    isAuth: boolean
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void,
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer,
        isAuth: state.authReducer.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;