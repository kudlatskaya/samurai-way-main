import React from 'react';
import {NavLink} from "react-router-dom";
import avatar from "../../../asets/images/avatar.jpg";
import s from "./User.module.css";
import {UserType} from "../../../state/reducers/usersReducer";
import UserName from "../../common/UserName/UserName";


type UsersPropsType = {
    user: UserType,
    followingProgress: number[],
    followTC: (userId: number) => void,
    unfollowTC: (userId: number) => void,
}

const User = ({user, followingProgress, followTC, unfollowTC}: UsersPropsType) => {
    return (
        <div key={user.id} className={s.user}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small && avatar} className={s.userPhoto}/>
                    </NavLink>
                </div>
                <span>
                    <span>
                        <div className={s.userName}>
                            <UserName login={user.name} url={'/profile/' + user.id}/>
                        </div>
                        <div className={s.userStatus}>{user.status || 'Follow your heart'}</div>
                    </span>
                </span>
                <div>
                    {
                        user.followed
                            // ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                            //     unfollowTC(user.id)
                            // }}>Unfollow</button>
                            //
                            // : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                            //     followTC(user.id)
                            // }}>Follow</button>
                            ?
                                <button className={s.followButton} disabled={followingProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            unfollowTC(user.id)
                                        }}>
                                    Unfollow
                                </button>
                            :
                                <button className={s.followButton} disabled={followingProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            followTC(user.id)
                                        }}>
                                    Follow
                                </button>

                    }
                </div>
            </span>
        </div>

    );
};

export default User;