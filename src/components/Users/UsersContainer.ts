import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/usersReducer";

type MapStateToProps = {
    users: UserType[],
}

type MapDispatchToPropsType = {
    follow: (id: number) => void,
    unfollow: (id: number) => void,
    setUsers: (users: UserType[]) => void,
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        users: state.usersReducer.items
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (id: number) => {
            dispatch(followAC(id));
        },
        unfollow: (id: number) => {
            dispatch(unfollowAC(id));
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;