import {Dispatch} from "redux";
import {authAPI} from "../../api/api";
import {AppDispatchType, AppThunk} from "../redux-store";

const SET_USER_DATA = 'network/auth/SET_USER_DATA';

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

export const setUserData = (userId: UserIdType, email: EmailType, login: LoginType, isAuth: boolean) => ({
    type: 'network/auth/SET_USER_DATA',
    payload: {userId, email, login, isAuth}
} as const)


export const getAuthTC = () => async (dispatch: Dispatch) => {
    const response = await authAPI.me()

    if (response.data.resultCode === 0) {
        const {id, email, login} = response.data.data
        dispatch(setUserData(id, email, login, true))
    }
}

export const loginTC = (email: EmailType,
                        password: PasswordType,
                        rememberMe: RememberMeType,
                        setStatus: (status: any) => void
) => async (dispatch: AppDispatchType) => {
    const response = await authAPI.login(email, password, rememberMe)

    if (response.data.resultCode === 0) {
        dispatch(getAuthTC())
    } else {
        setStatus(response.data.messages[0])
    }
}

export const logoutTC = () => async (dispatch: AppDispatchType) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}


//types

export type UserIdType = number | null | undefined
export type LoginType = string | null | undefined
export type EmailType = string | null | undefined
export type PasswordType = string | null | undefined
export type RememberMeType = boolean | undefined

type StateType = {
    userId: UserIdType
    email: EmailType
    login: LoginType
    isAuth: boolean,
}

export type ActionType = ReturnType<typeof setUserData>


export default authReducer;

