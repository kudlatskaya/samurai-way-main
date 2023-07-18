import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {followTC, getUsersTC, setCurrentPage, unfollowTC, UserType} from "../../redux/usersReducer";
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
                               unfollowTC
                           }: UsersAPIContainerPropsType) => {

    useEffect(() => {
        getUsersTC(currentPage, pageSize)
    }, [])

    const onPageChanged = (currentPage: number) => getUsersTC(currentPage, pageSize)

    return <>
        {isFetching ? <Preloader/> : null}

        <Users
            users={users}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            onPageChanged={onPageChanged}
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
    followingProgress: number[]
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingProgress: state.usersReducer.followingProgress
    }
}

type MapDispatchToPropsType = {
    setCurrentPage: (currentPage: number) => void,
    getUsersTC: (currentPage: number, pageSize: number) => void,
    followTC: (userId: number) => void,
    unfollowTC: (userId: number) => void,
}


export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setCurrentPage,
        getUsersTC,
        followTC,
        unfollowTC,
    })
)(UsersAPIContainer);