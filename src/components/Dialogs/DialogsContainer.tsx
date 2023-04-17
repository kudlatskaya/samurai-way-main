import {sendMessageActionCreator, updateNewMessageBodyActionCreator, StateType} from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogsPage: StateType
}

type MapDispatchToPropsType = {
    updateNewMessageBody: (text: string) => void,
    sendMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer,
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