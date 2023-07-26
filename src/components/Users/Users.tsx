import {FilterType, UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import avatar from '../../asets/images/avatar.jpg';
import {NavLink} from "react-router-dom";
import PaginationBlock from "../Pagination/PaginationBlock";
import UsersSearchForm from "./UsersSearchForm";

type UsersPropsType = {
    users: UserType[],
    onPageChanged: (currentPage: number) => void,
    pageSize: number,
    totalUsersCount: number,
    followingProgress: number[],
    followTC: (userId: number) => void,
    unfollowTC: (userId: number) => void,
    onFilterChanged: (filter: FilterType) => void,
}

const Users = ({
                   users,
                   totalUsersCount,
                   pageSize,
                   onPageChanged,
                   followingProgress,
                   followTC,
                   unfollowTC,
                   onFilterChanged
               }: UsersPropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <div>
                <PaginationBlock count={pagesCount} onPageChanged={onPageChanged}/>
            </div>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + '2'}>
                                <img src={u.photos.small && avatar} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {
                                        unfollowTC(u.id)
                                    }}>Unfollow</button>

                                    : <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {
                                        followTC(u.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};


export default Users;