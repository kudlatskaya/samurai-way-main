import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";
import avatar from '../../asets/images/avatar.jpg';
import {useEffect} from "react";
import Users from "./Users";

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
}

const UsersAPIContainer = ({
                   users,
                   follow,
                   unfollow,
                   setUsers,
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   setCurrentPage,
                   setTotalUsersCount
               }: UsersAPIContainerPropsType) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
                setTotalUsersCount(response.data.totalCount)
            })
    }, [])

    const onPageChanged = (currentPage: number) => {
        setCurrentPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                setUsers(response.data.items);
            })
    }

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <Users />


};

export default UsersAPIContainer;