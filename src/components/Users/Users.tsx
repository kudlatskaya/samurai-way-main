import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import avatar from '../../asets/images/avatar.jpg';
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    currentPage: number,
    onPageChanged: (currentPage: number) => void,
    pageSize: number,
    totalUsersCount: number,
}

const Users = ({users, follow, unfollow, currentPage, totalUsersCount, pageSize, onPageChanged}: UsersPropsType) => {

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
                            <NavLink to={'/profile' + item.id}>
                                <img src={item.photos.small && avatar} className={s.userPhoto}/>
                            </NavLink>
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