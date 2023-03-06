import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[],
}

const MyPosts = (props: MyPostsPropsType) => {
    const {posts} = props;

    let myPostElements = posts.map(post => <MyPost message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
    }

    return (<>
            <p>My posts</p>
            <div>
                <p>New post</p>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {myPostElements}
            </div>
        </>
    );
};

export default MyPosts;