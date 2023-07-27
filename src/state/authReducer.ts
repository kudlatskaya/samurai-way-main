import { Dispatch} from "redux";
import {authAPI} from "../api/api";
import {AppDispatchType, AppThunk} from "./redux-store";

const SET_USER_DATA = 'SET_USER_DATA';
// const SET_IS_LOGINED = 'SET_IS_LOGINED';


type StateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    // isLogined: boolean
}


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    // isLogined: false

}

export type ActionType = SetUsersDataACType
    // | SetIsLoginedACType


const authReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        // case "SET_IS_LOGINED":
        //     return {
        //         ...state,
        //         isLogined: action.data.isLogined
        //     }

        default:
            return state;
    }
    return state;
}

type SetUsersDataACType = ReturnType<typeof setUserData>
export const setUserData = (userId: number, email: string, login: string) => ({
    type: 'SET_USER_DATA',
    data: {userId, email, login}
} as const)

// type SetIsLoginedACType = ReturnType<typeof setIsLogined>
// export const setIsLogined = (userId: number, isLogined: boolean) => ({
//     type: 'SET_IS_LOGINED',
//     data: {userId, isLogined}
// } as const)

// type GetAuthTCType = typeof getAuthTC
export const getAuthTC = (): AppThunk => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if(response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setUserData(id, email, login))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: AppDispatchType) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthTC())
                // dispatch(setIsLogined(response.data.data.userId, true))
            }
        })
}

export default authReducer;

