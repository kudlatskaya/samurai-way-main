import React from 'react';
import s from "./MyPost.module.css"

type MyPostPropsType = {
    message: string
}

const MyPost = (props:MyPostPropsType) => {
    return <>
        <div className={s.item}>post</div>
        <p>{props.message}</p>
        <div>
            <span>Like</span>
        </div>
    </>
};

export default MyPost;