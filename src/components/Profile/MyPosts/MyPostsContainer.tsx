import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {ActionType, PostType} from "../../../redux/state";
import MyPosts from "./MyPosts";


type MyPostsPropsType = {
    store: {
        dispatch: (action: ActionType) => void,
        posts: PostType[],
    }
}

const MyPostsContainer = (props: any) => {
    const { store: { dispatch, posts } } = props;

    let state = props.store.getState();

    let onClickAddPostHandler = () => {
        dispatch(addPostActionCreator());
    }

    const onChangePost = (text: string) => {
        text && dispatch(updateNewPostTextActionCreator(text));
    }

    return <MyPosts updateNewPostText={onChangePost} addPost={onClickAddPostHandler}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
};

export default MyPostsContainer;