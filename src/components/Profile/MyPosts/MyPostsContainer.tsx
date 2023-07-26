import {addPostActionCreator} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

type MapStateToProps = {
    posts: PostType[],
}

type MapDispatchToPropsType = {
    addPost: (post: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profileReducer.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (post: string) => {
            dispatch(addPostActionCreator(post));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;