import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setToggleIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    UserType
} from "../../redux/usersReducer";
import {useEffect} from "react";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {socialNetworkApi} from "../../api/social-network-api";

type UsersAPIContainerPropsType = {
    users: UserType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users: UserType[]) => void,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    isFetching: boolean,
    setToggleIsFetching: (isFetching: boolean) => void,
}

const UsersAPIContainer = ({
                               users,
                               follow,
                               unfollow,
                               setUsers,
                               pageSize,
                               totalUsersCount,
                               currentPage,
                               setCurrentPage,
                               setTotalUsersCount,
                               isFetching,
                               setToggleIsFetching,
                           }: UsersAPIContainerPropsType) => {

    useEffect(() => {
        setToggleIsFetching(true)

        socialNetworkApi.getUsers(currentPage, pageSize)
            .then(data => {
                setToggleIsFetching(false)
                setUsers(data.items)
                setTotalUsersCount(data.totalCount)
            })
    }, [])

    const onPageChanged = (currentPage: number) => {
        setCurrentPage(currentPage)
        setToggleIsFetching(true)

        socialNetworkApi.getUsers(currentPage, pageSize)
            .then(data => {
                setToggleIsFetching(false)
                setUsers(data.items)
            })
    }

    return <>
        {isFetching ? <Preloader/> : null}

        <Users
            users={users}
            // currentPage={currentPage}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            follow={follow}
            onPageChanged={onPageChanged}
            unfollow={unfollow}/>
    </>
}

type MapStateToProps = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersReducer.items,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggleIsFetching,
})(UsersAPIContainer);

export default UsersContainer;