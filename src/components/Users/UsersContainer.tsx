import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
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
import axios from "axios";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";

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
    toggleIsFetching: (isFetching: boolean) => void,
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
                               toggleIsFetching,
                           }: UsersAPIContainerPropsType) => {

    useEffect(() => {
        toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                toggleIsFetching(false)
                setUsers(response.data.items)
                setTotalUsersCount(response.data.totalCount)
            })
    }, [])

    const onPageChanged = (currentPage: number) => {
        setCurrentPage(currentPage)
        toggleIsFetching(true)

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                toggleIsFetching(false)
                setUsers(response.data.items)
            })
    }

    return <>
        {isFetching ? <Preloader/> : null}

        <Users
            users={users}
            currentPage={currentPage}
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

type MapDispatchToPropsType = {
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users: UserType[]) => void,
    setCurrentPage: (currentPage: number) => void,
    setTotalUsersCount: (totalUsersCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
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

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id));
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(setToggleIsFetchingAC(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    toggleIsFetching: setToggleIsFetching,
})(UsersAPIContainer);

export default UsersContainer;