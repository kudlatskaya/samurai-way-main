import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "../../../redux/types";
import {Dispatch} from "redux";

type MapStateToProps = {
    posts: PostType[],
    newPostText: string,
}

type MapDispatchToPropsType = {
    updateNewPostText: (text: string) => void,
    addPost: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToProps => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;