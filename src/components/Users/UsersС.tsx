// import {UserType} from "../../redux/usersReducer";
// import s from './Users.module.css'
// import axios from "axios";
// import avatar from '../../asets/images/avatar.jpg';
 import React from 'react'
//
// type UsersPropsType = {
//     users: UserType[],
//     follow: (id: number) => void,
//     unfollow: (id: number) => void,
//     setUsers: (users: UserType[]) => void,
// }
//
// class Users extends React.Component<any, any> {
//     constructor(props: any) {
//         super(props);
//     }
//
//     componentDidMount() {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//             this.props.setUsers(response.data.items);
//         })
//     }
//
//     render() {
//         return (
//             <div>
//                 {
//                     this.props.users.map(item => <div key={item.id}>
//                     <span>
//                         <div>
//                             <img src={item.photos.small && avatar} className={s.userPhoto}/>
//                         </div>
//                         <div>
//                             {
//                                 item.followed
//                                     ? <button onClick={() => {
//                                         this.props.unfollow(item.id)
//                                     }}>Unfollow</button>
//                                     : <button onClick={() => {
//                                         this.props.follow(item.id)
//                                     }}>Follow</button>
//                             }
//
//                         </div>
//                     </span>
//                         <span>
//                         <span>
//                             <div>{item.name}</div>
//                             <div>{item.status}</div>
//                         </span>
//                     </span>
//                     </div>)
//                 }
//             </div>
//         );
//     }
// }
//
// export default Users;