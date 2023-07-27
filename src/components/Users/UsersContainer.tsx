import {connect} from "react-redux";
import {AppStateType} from "../../state/redux-store";
import {FilterType, followTC, getUsersTC, setCurrentPage, unfollowTC, UserType} from "../../state/usersReducer";
import {useEffect} from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type UsersAPIContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

const UsersAPIContainer = ({
                               users,
                               pageSize,
                               totalUsersCount,
                               currentPage,
                               isFetching,
                               followingProgress,
                               getUsersTC,
                               followTC,
                               unfollowTC,
                               filter
                           }: UsersAPIContainerPropsType) => {

    useEffect(() => {
        getUsersTC(currentPage, pageSize, filter)
    }, [])

    const onPageChanged = (currentPage: number) => getUsersTC(currentPage, pageSize, filter)
    const onFilterChanged = (filter: FilterType) => getUsersTC(1, pageSize, filter)

    return <>
        {isFetching ? <Preloader/> : null}

        <Users
            users={users}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            onPageChanged={onPageChanged}
            onFilterChanged={onFilterChanged}
            followingProgress={followingProgress}
            followTC={followTC}
            unfollowTC={unfollowTC}/>
    </>
}

type MapStateToPropsType = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingProgress: number[],
    filter: FilterType
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingProgress: state.usersReducer.followingProgress,
        filter: state.usersReducer.filter
    }
}

type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void,
    getUsersTC: (currentPage: number, pageSize: number, filter: FilterType) => void,
    followTC: (userId: number) => void,
    unfollowTC: (userId: number) => void,
}


export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, {setCurrentPage, getUsersTC, followTC, unfollowTC})
)(UsersAPIContainer);