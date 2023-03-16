import React, {ChangeEvent, RefObject} from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[],
    addPost: () => void,
    newPostText: string,
    updateNewPostText: (newText: string) => void,
}

const MyPosts = (props: MyPostsPropsType) => {
    const { posts, addPost, newPostText, updateNewPostText } = props;

    let myPostElements = posts.map(post => <MyPost key={post.id} message={post.message} likesCount={post.likesCount}/>);

    // let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onClickAddPostHandler = () => {
            addPost();
    }

    const onChangePost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value;
        text && updateNewPostText(text);
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