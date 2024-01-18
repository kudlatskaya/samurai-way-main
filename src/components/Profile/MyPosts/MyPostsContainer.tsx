import {addPostActionCreator} from '../../../state/reducers/profileReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../state/redux-store";
import {Dispatch} from "redux";

export type PostType = {
    id: number,
    message: string,
    likesCount: number,
    title: string,
}

type MapStateToProps = {
    posts: PostType[],
}

type MapDispatchToPropsType = {
    addPost: (post: string, title: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profileReducer.posts,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (post: string, title: string) => {
            dispatch(addPostActionCreator(post, title));
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;