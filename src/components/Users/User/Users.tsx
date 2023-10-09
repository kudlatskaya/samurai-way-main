import React from 'react';
import {NavLink} from "react-router-dom";
import avatar from "../../../asets/images/avatar.jpg";
import s from "../Users.module.css";
import {UserType} from "../../../state/reducers/usersReducer";

type UsersPropsType = {
    user: UserType,
    followingProgress: number[],
    followTC: (userId: number) => void,
    unfollowTC: (userId: number) => void,
}

const User = ({user, followingProgress, followTC, unfollowTC}: UsersPropsType) => {
    return (

            <div key={user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + '2'}>
                                <img src={user.photos.small && avatar} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {
                                user.followed
                                    ? <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                        unfollowTC(user.id)
                                    }}>Unfollow</button>

                                    : <button disabled={followingProgress.some(id => id === user.id)} onClick={() => {
                                        followTC(user.id)
                                    }}>Follow</button>
                            }
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </span>
                    </span>
            </div>

    );
};

export default User;