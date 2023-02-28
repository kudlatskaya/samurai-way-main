import React from 'react';
import s from "./MyPosts.module.css";
import MyPost from "./Post/MyPost";
import {PostType} from "../../../redux/state";


type MyPostsPropsType = {
    posts: PostType[],
}

const MyPosts = (props: MyPostsPropsType) => {
    const { posts } = props;

    let myPostElements = posts.map(post => <MyPost message={post.message} likesCount={post.likesCount} /> );

    return (<>
            <p>My posts</p>
            <div>
                <p>New post</p>
                <textarea name="newPost" ></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                { myPostElements }
            </div>
        </>
    );
};

export default MyPosts;