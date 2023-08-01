import {Dispatch} from "redux";
import {getAuthTC} from "./authReducer";
import {ThunkDispatch} from "redux-thunk";
import {AppDispatchType} from "../redux-store";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

type StateType = {
    initialized: boolean
}
type ActionType = ReturnType<typeof initializedSuccess>

const InitialState = {
    initialized: false
}

const appReducer = (state: StateType = InitialState, action: ActionType): StateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state
    }
}

const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'} as const)

export const initializeApp = () => (dispatch: AppDispatchType) => {
    let data = dispatch(getAuthTC());
    data.then(() => {
        dispatch(initializedSuccess())
    })


}

export default appReducer