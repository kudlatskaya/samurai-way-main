import React, {RefObject} from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[],
    addPost: () => void,
    newPostText: string,
    updateNewPostText: (newText?: string) => void,
}

const MyPosts = (props: MyPostsPropsType) => {
    const { posts, addPost, newPostText, updateNewPostText } = props;

    let myPostElements = posts.map(post => <MyPost message={post.message} likesCount={post.likesCount}/>);

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    let onClickAddPostHandler = () => {
            addPost();
    }

    const onChangePost = () => {
        let text = newPostElement.current?.value;
        updateNewPostText(text);
    }

    return (<>
            <p>My posts</p>
            <div>
                <p>New post</p>
                <textarea ref={newPostElement} onChange={onChangePost} value={newPostText}/>
                <button onClick={onClickAddPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </>
    );
};

export default MyPosts;