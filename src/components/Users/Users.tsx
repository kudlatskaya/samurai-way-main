import {images, UserType} from "../../redux/usersReducer";
import styles from './users.module.css'

type UsersPropsType = {
    users: UserType[],
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users: UserType[]) => void,
}

const Users = (props: UsersPropsType) => {
    const {users, follow, unfollow, setUsers} = props;

    // if(users.length === 0) {
    //     setUsers([
    //         {id: 1, src: images[0], followed: false, fullName: 'Masha', status: 'I am online', location: {city: 'Minsk', country: 'Belarus'}},
    //         {id: 2, src: images[1], followed: false, fullName: 'Dasha', status: 'I am here', location: {city: 'Brest', country: 'Belarus'}},
    //         {id: 3, src: images[2], followed: true, fullName: 'Sasha', status: 'I am offline', location: {city: 'Moscow', country: 'Russia'}},
    //     ])
    // }


    return (
        <div>
            {
                users.map(item => <div key={item.id}>
                    <span>
                        <div>
                            <img src={item.src} className={styles.userPhoto}/>
                        </div>
                        <div>
                            {
                                item.followed
                                    ? <button onClick={() => { unfollow(item.id)}}>Unfollow</button>
                                    : <button onClick={() => { follow(item.id)}}>Follow</button>
                            }

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{item.fullName}</div>
                            <div>{item.status}</div>
                        </span>
                        <span>
                            <div>{item.location.city}</div>
                            <div>{item.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    );
};

export default Users;