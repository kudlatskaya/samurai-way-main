import {AppStateType} from "../redux-store";

export const getUsersSelector = (state: AppStateType) => state.usersReducer.items
export const getPageSizeSelector = (state: AppStateType) => state.usersReducer.pageSize
export const getTotalUsersCountSelector = (state: AppStateType) => state.usersReducer.totalUsersCount
export const getCurrentPageSelector = (state: AppStateType) => state.usersReducer.currentPage
export const getIsFetchingSelector = (state: AppStateType) => state.usersReducer.isFetching
export const getFollowingProgressSelector = (state: AppStateType) => state.usersReducer.followingProgress
export const getFilterSelector = (state: AppStateType) => state.usersReducer.filter


