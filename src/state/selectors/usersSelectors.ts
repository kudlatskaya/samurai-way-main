import {AppStateType} from "../redux-store";
import {createSelector} from "reselect";


export const getIsFetchingSelector = (state: AppStateType) => state.usersReducer.isFetching

export const getUsers = (state: AppStateType) => state.usersReducer.items

export const getUsersSelector = (state: AppStateType) => {
    return getUsers(state).filter(u => true)
}

export const getUsersSuperSelector  = createSelector(getUsers, (users) => {
    return users.filter(u => true)
})

export const getPageSizeSelector = (state: AppStateType) => state.usersReducer.pageSize
export const getTotalUsersCountSelector = (state: AppStateType) => state.usersReducer.totalUsersCount
export const getCurrentPageSelector = (state: AppStateType) => state.usersReducer.currentPage
export const getFollowingProgressSelector = (state: AppStateType) => state.usersReducer.followingProgress
export const getFilterSelector = (state: AppStateType) => state.usersReducer.filter


