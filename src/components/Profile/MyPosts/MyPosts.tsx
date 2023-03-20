import {ChangeEvent, RefObject} from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {
    ActionType,
    PostType,
    addPostActionCreator,
    updateNewPostTextActionCreator
} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[],
    newPostText: string,
    dispatch: (action: ActionType) => void,
}

const MyPosts = (props: MyPostsPropsType) => {
    const { posts, newPostText, dispatch } = props;

    let myPostElements = posts.map(post => <MyPost key={post.id} message={post.message} likesCount={post.likesCount}/>);

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onClickAddPostHandler = () => {
        dispatch(addPostActionCreator());
    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        text && dispatch(updateNewPostTextActionCreator(text));
    }

    return (<>
            <p>My posts</p>
            <div>
                <p>New post</p>
                <textarea onChange={onChangePost} value={newPostText}/>
                <button onClick={onClickAddPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </>
    );
};

export default MyPosts;