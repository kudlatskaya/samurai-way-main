import React, {RefObject} from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[],
    addPost: (postMessage: string) => void,
}

const MyPosts = (props: MyPostsPropsType) => {
    const { posts, addPost } = props;

    let myPostElements = posts.map(post => <MyPost message={post.message} likesCount={post.likesCount}/>);

    let newPostElement: RefObject<HTMLTextAreaElement> = React.createRef();

    let onClickAddPostHandler = () => {
        if (newPostElement.current) {
            let text = newPostElement.current.value;
            addPost(text);
            newPostElement.current.value = '';
        }
    }

    return (<>
            <p>My posts</p>
            <div>
                <p>New post</p>
                <textarea ref={newPostElement}></textarea>
                <button onClick={onClickAddPostHandler}>Add post</button>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </>
    );
};

export default MyPosts;