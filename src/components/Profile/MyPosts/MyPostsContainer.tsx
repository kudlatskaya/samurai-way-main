import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {ActionType} from "../../../redux/state";
import MyPosts from "./MyPosts";


type MyPostsPropsType = {
    dispatch: (action: ActionType) => void,
}

const MyPostsContainer = (props: MyPostsPropsType) => {
    const { dispatch } = props;

    let onClickAddPostHandler = () => {
        dispatch(addPostActionCreator());
    }

    const onChangePost = (text: string) => {
        text && dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts updateNewPostText={onChangePost} addPost={onClickAddPostHandler}/>
};

export default MyPostsContainer;