import {FilterType, UserType} from "../../state/reducers/usersReducer";
import UsersSearchForm from "./UsersSearchForm";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/Users";

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
                   totalUsersCount, pageSize, onPageChanged,
                   followingProgress,
                   followTC,
                   unfollowTC,
                   onFilterChanged
               }: UsersPropsType) => {

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} onPageChanged={onPageChanged}/>
            {
                users.map(u => <User user={u} followingProgress={followingProgress} followTC={followTC} unfollowTC={unfollowTC}/>)
            }
        </div>
    );
};


export default Users;