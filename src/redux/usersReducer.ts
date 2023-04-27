const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


export type UserType = {
    name: string,
    id: number,
    uniqueUrlName: string,
    photos: {
        small: string,
        large: string,
    },
    status: string,
    followed: boolean,
}

type StateType = {
    items: UserType[],
    totalCount: number,
    error: string,
}


// export const images = [
//     'https://n1s2.hsmedia.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0xac120003_4430520541578509619.jpg',
//     'https://gamebomb.ru/files/galleries/001/b/b2/413053.jpg',
//     'https://www.soyuz.ru/public/uploads/files/2/7615287/20221219115607f2986eae3a.jpg',
// ]
//
// const initialState = {
//     users: [
//         {id: 1, src: images[0], followed: false, fullName: 'Masha', status: 'I am online', location: {city: 'Minsk', country: 'Belarus'}},
//         {id: 2, src: images[1], followed: false, fullName: 'Dasha', status: 'I am here', location: {city: 'Brest', country: 'Belarus'}},
//         {id: 3, src: images[2], followed: true, fullName: 'Sasha', status: 'I am offline', location: {city: 'Moscow', country: 'Russia'}},
//     ] as UserType[]
// }
// type UsersType = UserType[]


type ActionType = FollowACType | UnfollowACType | SetUsersACType

const usersReducer = (state: StateType, action: ActionType): StateType => {
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