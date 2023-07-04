const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

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
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean
    followingProgress: number[]
}

// export const images = [
//     'https://n1s2.hsmedia.ru/6a/46/ae/6a46aeed947a183d67d1bc48211151bf/480x496_0xac120003_4430520541578509619.jpg',
//     'https://gamebomb.ru/files/galleries/001/b/b2/413053.jpg',
//     'https://www.soyuz.ru/public/uploads/files/2/7615287/20221219115607f2986eae3a.jpg',
// ] as string[]

const initialState = {
    items: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []
}

type ActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | SetToggleIsFetchingACType
    | SetToggleIsFollowingProgressACType

const usersReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: true}
                    }
                    return item
                }),
            }

        case UNFOLLOW:
            return {
                ...state,
                items: state.items.map(item => {
                    if (item.id === action.id) {
                        return {...item, followed: false}
                    }
                    return item
                }),
            }

        case SET_USERS:
            return {...state, items: action.users}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {...state,
                followingProgress: action.followingProgress
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            }

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default:
            return state;
    }
    return state;
}

type FollowACType = ReturnType<typeof follow>
export const follow = (id: number) => ({type: FOLLOW, id} as const)

type UnfollowACType = ReturnType<typeof unfollow>
export const unfollow = (id: number) => ({type: UNFOLLOW, id} as const)

type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)

type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)

type SetToggleIsFetchingACType = ReturnType<typeof setToggleIsFetching>
export const setToggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

type SetToggleIsFollowingProgressACType = ReturnType<typeof setToggleIsFollowingProgress>
export const setToggleIsFollowingProgress = (followingProgress: number[], userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    followingProgress,
    userId
} as const)

export default usersReducer;

