import {Dispatch} from "redux";
import {socialNetworkApi} from "../api/social-network-api";

const SET_USER_DATA = 'SET_USER_DATA';


type StateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
}


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

type ActionType = setUsersDataACType


const authReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
    return state;
}

type setUsersDataACType = ReturnType<typeof setUserData>
export const setUserData = (userId: number, email: string, login: string) => ({
    type: 'SET_USER_DATA',
    data: {userId, email, login}
} as const)

export const getAuthTC = () => (dispatch: Dispatch) => {
    socialNetworkApi.getAuth()
        .then(response => {
            if(response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                dispatch(setUserData(id, email, login))
            }
        })
}

export default authReducer;

