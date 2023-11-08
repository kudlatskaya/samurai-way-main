import {Dispatch} from "redux";
import {authAPI, securityAPI} from "../../api/api";
import {AppDispatchType, AppThunk} from "../redux-store";

const SET_USER_DATA = 'network/auth/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'network/auth/GET_CAPTCHA_URL_SUCCESS';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
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

export const getCaptchaUrlSuccess = (captchaUrl: string) => ({
    type: 'network/auth/GET_CAPTCHA_URL_SUCCESS',
    payload: {captchaUrl}
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
                        captchaUrl: string | null | undefined,
                        setStatus: (status: any) => void
) => async (dispatch: AppDispatchType) => {
    const response = await authAPI.login(email, password, rememberMe, captchaUrl)

    if (response.data.resultCode === 0) {
        dispatch(getAuthTC())
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl)
        }
        setStatus(response.data.messages[0])
    }
}

export const logoutTC = () => async (dispatch: AppDispatchType) => {
    const response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false))
    }
}

export const getCaptchaUrl = () => async (dispatch: AppDispatchType) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
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
    captchaUrl: string | null
}

export type ActionType = ReturnType<typeof setUserData>
    | ReturnType<typeof getCaptchaUrlSuccess>


export default authReducer;

