import {userAPI} from "../api/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
const SET_FILTER = 'SET_FILTER';

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
    followingProgress: number[],
    filter: FilterType
}

export type FilterType = typeof initialState.filter

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
    followingProgress: [],
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

type ActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | SetToggleIsFetchingACType
    | SetToggleIsFollowingProgressACType
    | SetFilterACType

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
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id != action.userId)
            }

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case SET_FILTER:
            return {...state, filter: action.payload}

        default:
            return state;
    }
    return state;
}

type FollowACType = ReturnType<typeof setFollow>
export const setFollow = (id: number) => ({type: FOLLOW, id} as const)

type UnfollowACType = ReturnType<typeof setUnfollow>
export const setUnfollow = (id: number) => ({type: UNFOLLOW, id} as const)

type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users} as const)

type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalUsersCount: number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const)

type SetToggleIsFetchingACType = ReturnType<typeof setToggleIsFetching>
export const setToggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching} as const)

type SetFilterACType = ReturnType<typeof setFilter>
export const setFilter = (filter: FilterType) => ({type: SET_FILTER, payload: filter} as const)

type SetToggleIsFollowingProgressACType = ReturnType<typeof setToggleIsFollowingProgress>
export const setToggleIsFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
} as const)

export const getUsersTC = (currentPage: number, pageSize: number, filter: FilterType) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFetching(true))
        dispatch(setFilter(filter))

        userAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
            .then(data => {
                dispatch(setToggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}

export const followTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFollowingProgress(true, userId))

        userAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setFollow(userId))
                }
                dispatch(setToggleIsFollowingProgress(false, userId))
            })
    }
}

export const unfollowTC = (userId: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setToggleIsFollowingProgress(true, userId))

        userAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setUnfollow(userId))
                }
                dispatch(setToggleIsFollowingProgress(false, userId))
            })
    }
}


//getAuth

export default usersReducer;

