const SET_USER_DATA = 'SET_USER_DATA';


type StateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
}


const initialState = {
    userId: null,
    email: null,
    login: null,
}

type ActionType = setUsersDataACType


const authReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
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

export default authReducer;

