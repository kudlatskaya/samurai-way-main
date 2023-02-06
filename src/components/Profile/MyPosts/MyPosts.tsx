import React from 'react';
import s from "./MyPosts.module.css"
import MyPost from "./Post/MyPost";

const MyPosts = () => {
    return (<>
            <p>My posts</p>
            <div>
                <p>New post</p>
                <textarea name="newPost" ></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <MyPost message={'Hi'} />
                <MyPost message={'By'}/>
                <MyPost message={'Hello'}/>
                <MyPost message={'Good by'}/>
            </div>
        </>
    );
};

export default MyPosts;