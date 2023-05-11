import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";
import avatar from '../../asets/images/avatar.jpg';
import {useEffect} from "react";

type UsersPropsType = {
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

const Users = ({
                   users,
                   follow,
                   unfollow,
                   setUsers,
                   totalUsersCount,
                   pageSize,
                   currentPage,
                   setCurrentPage,
                   setTotalUsersCount
               }: UsersPropsType) => {

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

    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span className={currentPage === p ? s.seletedPage : ''}
                                     onClick={(e) => {
                                         onPageChanged(p)
                                     }}
                        >{p} </span>

                    })
                }
            </div>

            {
                users.map(item => <div key={item.id}>
                    <span>
                        <div>
                            <img src={item.photos.small && avatar} className={s.userPhoto}/>
                        </div>
                        <div>
                            {
                                item.followed
                                    ? <button onClick={() => {
                                        unfollow(item.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        follow(item.id)
                                    }}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{item.name}</div>
                            <div>{item.status}</div>
                        </span>
                        {/*<span>*/}
                        {/*    <div>{item.location.city}</div>*/}
                        {/*    <div>{item.location.country}</div>*/}
                        {/*</span>*/}
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;