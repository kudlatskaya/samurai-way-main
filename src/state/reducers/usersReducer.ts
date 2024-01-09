import {userAPI} from "../../api/api";
import {Dispatch} from "redux";
import {updateOnbjectInArray} from "../../utils/object-helpers";

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
    // [key: string]: any;
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
    pageSize: 9,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
    filter: {
        term: '',
        friend: null as null | boolean
    }
}

export type ActionType = FollowACType
    | UnfollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | SetToggleIsFetchingACType
    | SetToggleIsFollowingProgressACType
    | SetFilterACType
//(items: UserType[], itemId: number, objPropName: string, newObjProps: {})
const usersReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items: updateOnbjectInArray(state.items, action.id, 'id', {followed: true})
                // items: state.items.map(item => {
                //     if (item.id === action.id) {
                //         return {...item, followed: true}
                //     }
                //     return item
                // }),
            }

        case UNFOLLOW:
            return {
                ...state,
                items: updateOnbjectInArray(state.items, action.id, 'id', {followed: false}),
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
    return async (dispatch: Dispatch) => {
        dispatch(setToggleIsFetching(true))
        dispatch(setFilter(filter))

        const data = await userAPI.getUsers(currentPage, pageSize, filter.term, filter.friend)
        dispatch(setToggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
    }
}

const followUnfollowFlow = async (
    dispatch: Dispatch,
    userId: number,
    apiMetod: (userId: number) => any,
    setMetod: (userId: number) => any
) => {
    dispatch(setToggleIsFollowingProgress(true, userId))

    const response = await apiMetod(userId)
    if (response.data.resultCode === 0) {
        dispatch(setMetod(userId))
    }
    dispatch(setToggleIsFollowingProgress(false, userId))
}

export const followTC = (userId: number) => {
    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI), setFollow)
    }
}

export const unfollowTC = (userId: number) => {
    return async (dispatch: Dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.unfollow.bind(userAPI), setUnfollow)
    }
}


//me

export default usersReducer;

