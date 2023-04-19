const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export type UserType = {
    id: number,
    followed: boolean,
    fullName: string,
    status: string,
    location: {
        city: string,
        country: string,
    }
}

const initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Masha', status: 'I am online', location: {city: 'Minsk', country: 'Belarus'}},
        {id: 2, followed: false, fullName: 'Dasha', status: 'I am here', location: {city: 'Brest', country: 'Belarus'}},
        {id: 3, followed: true, fullName: 'Sasha', status: 'I am offline', location: {city: 'Moscow', country: 'Russia'}},
    ] as UserType[]
}

type StateType = typeof initialState
type UsersType = typeof initialState.users

type ActionType = FollowACType | UnfollowACType | SetUsersACType

const usersReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: true}
                    }
                    return item
                }),
            }

        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: false}
                    }
                    return item
                }),
            }

        case "SET_USERS":
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
    return state;
}

type FollowACType = ReturnType<typeof followAC>
export const followAC = (id: number) => ({type: FOLLOW, id} as const)

type UnfollowACType = ReturnType<typeof unfollowAC>
export const unfollowAC = (id: number) => ({type: UNFOLLOW, id} as const)

type SetUsersACType = ReturnType<typeof setUsersAC>
export const setUsersAC = (users: UsersType) => ({type: SET_USERS, users} as const)


export default usersReducer;