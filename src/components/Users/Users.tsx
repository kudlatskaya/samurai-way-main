import {UserType} from "../../redux/usersReducer";
import s from './Users.module.css'
import axios from "axios";
import avatar from '../../asets/images/avatar.jpg';

type UsersPropsType = {
    users: UserType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users: UserType[]) => void,
}

const Users = (props: UsersPropsType) => {
    const {users, follow, unfollow, setUsers} = props;

    //useEffect
    let getUsers = () => {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            setUsers(response.data.items);
        })
    }

    return (
        <div>
            <div>
                <span className={s.seletedPage}>1</span>
                <span className={s.seletedPage1}>2</span>
                <span className={s.seletedPage}>3</span>
                <span className={s.seletedPage}>4</span>
                <span className={s.seletedPage}>5</span>
            </div>
            <button onClick={getUsers}>Users</button>
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