import React from 'react';
import s from "./MyPosts.module.css"
import MyPost from "./Post/MyPost";

type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

const MyPosts = () => {

    let myPostsData: PostType[] = [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'By', likesCount: 1},
        {id: 3, message: 'Hello', likesCount: 10},
        {id: 4, message: 'Good by', likesCount: 11},
    ]

    let myPostElements = myPostsData.map(post => <MyPost message={post.message} likesCount={post.likesCount} /> );

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