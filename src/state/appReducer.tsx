import {Dispatch} from "redux";

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

export const initialize = () => (dispatch: Dispatch) => {

}