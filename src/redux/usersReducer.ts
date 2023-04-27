const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string | null,
    photos: {
        small: string | undefined,
        large: string | null,
    },
    status: string | null,
    followed: boolean,
}

type StateType = {
    items: UserType[],
}

export const images = [
    'https://n1s2.hsmedia.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0xac120003_4430520541578509619.jpg',
    'https://gamebomb.ru/files/galleries/001/b/b2/413053.jpg',
    'https://www.soyuz.ru/public/uploads/files/2/7615287/20221219115607f2986eae3a.jpg',
] as string[]

const initialState = {
    items: [
        {id: 1, photos: {small: images[0], large: null}, followed: false, name: 'Masha', uniqueUrlName: null, status: 'I am online'},
        {id: 2, photos: {small: images[1], large: null}, followed: false, name: 'Misha', uniqueUrlName: null, status: 'I am offline'},
        {id: 3, photos: {small: images[2], large: null}, followed: false, name: 'Dasha', uniqueUrlName: null, status: 'I am...'},
    ] as UserType[]
}

type ActionType = FollowACType | UnfollowACType | SetUsersACType

const usersReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: true}
                    }
                    return item
                }),
            }

        case "UNFOLLOW":
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: false}
                    }
                    return item
                }),
            }

        case "SET_USERS":
            return {...state, items: [...state.items, ...action.users]}

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
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users} as const)


export default usersReducer;