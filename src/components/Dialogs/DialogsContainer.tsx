import {sendMessageActionCreator} from '../../redux/dialogsReducer';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";

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

}

type MapStateToPropsType = {
    dialogsPage: DialogsPageType,
}

type MapDispatchToPropsType = {
    sendMessage: (message: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsReducer,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        sendMessage: (message: string) => {
            dispatch(sendMessageActionCreator(message));
        },
    }
}

export default compose<React.ComponentType>(
     connect(mapStateToProps, mapDispatchToProps),
     withAuthRedirect
 )(Dialogs)

