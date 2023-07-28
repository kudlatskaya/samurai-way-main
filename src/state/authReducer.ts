import { Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppDispatchType, AppThunk} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
    return state;
}

export const setUserData = (userId: UserIdType, email: LoginType, login: EmailType, isAuth: boolean) => ({
    type: 'SET_USER_DATA',
    payload: {userId, email, login, isAuth}
} as const)


export const getAuthTC = (): AppThunk => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setUserData(id, email, login, true))
            }
        })
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatchType) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthTC())
            }
        })
}

export const logoutTC = () => (dispatch: AppDispatchType) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}


//types

type UserIdType = number | null
type LoginType = string | null
type EmailType = string | null

type StateType = {
    userId: UserIdType
    email: LoginType
    login: EmailType
    isAuth: boolean,
}

export type ActionType = ReturnType<typeof setUserData>


export default authReducer;

