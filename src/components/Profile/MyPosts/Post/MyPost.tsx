import React from 'react';
import s from "./MyPost.module.css"

type MyPostPropsType = {
    message: string,
    likesCount: number,
}

const MyPost = (props:MyPostPropsType) => {
    return <>
        <div className={s.item}>post</div>
        <p>{props.message}</p>
        <div>
            <span>Like {props.likesCount}</span>
        </div>
    </>
};

export default MyPost;