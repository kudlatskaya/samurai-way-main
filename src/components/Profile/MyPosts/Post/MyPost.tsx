import React from 'react';
import s from "./MyPost.module.css"

type MyPostPropsType = {
    message: string,
    likesCount: number,
    title: string
}

const MyPost = ({message, likesCount, title}:MyPostPropsType) => {
    console.log('MyPost')
    return <>
        <div className={s.item}>{title}</div>
        <p>{message}</p>
        <div>
            <span>Like {likesCount}</span>
        </div>
    </>
};

export default MyPost;