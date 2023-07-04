import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import avatar from '../../asets/images/avatar.jpg';
import {NavLink} from "react-router-dom";
import PaginationBlock from "../Pagination/PaginationBlock";
import {socialNetworkApi} from "../../api/social-network-api";

type UsersPropsType = {
    users: UserType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    onPageChanged: (currentPage: number) => void,
    pageSize: number,
    totalUsersCount: number,
    setToggleIsFollowingProgress: (isFetching:  boolean, userId: number) => void,
    followingProgress: number[]
}

const Users = ({
                   users,
                   follow,
                   unfollow,
                   totalUsersCount,
                   pageSize,
                   onPageChanged,
                   setToggleIsFollowingProgress,
                   followingProgress
               }: UsersPropsType) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    return (
        <div>
            <div>
                <PaginationBlock count={pagesCount} onPageChanged={onPageChanged}/>
            </div>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile' + '/2'}>
                                <img src={u.photos.small && avatar} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                u.followed
                                    ? <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {
                                        setToggleIsFollowingProgress(true, u.id)

                                        socialNetworkApi.deleteUser(u.id)
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    unfollow(u.id)
                                                }
                                                setToggleIsFollowingProgress(false, u.id)
                                            })

                                    }}>Unfollow</button>

                                    : <button disabled={followingProgress.some(id => id === u.id)} onClick={() => {
                                        setToggleIsFollowingProgress(true, u.id)

                                        socialNetworkApi.createUser(u.id)
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    follow(u.id)
                                                }
                                                setToggleIsFollowingProgress(false, u.id)
                                            })

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