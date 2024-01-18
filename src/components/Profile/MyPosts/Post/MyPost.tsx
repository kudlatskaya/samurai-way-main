import React from 'react';
import s from "./MyPost.module.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import {accentColor} from "../../../../constants";

type MyPostPropsType = {
    message: string,
    likesCount: number,
    title: string
}

const MyPost = ({message, likesCount, title}: MyPostPropsType) => {

    return <div className={s.post}>
        <div className={s.title}>{title}</div>
        <p className={s.postText}>{message}</p>
        <div className={s.likes}>
            <FavoriteIcon sx={{color: accentColor}}/> <span> {likesCount}</span>
        </div>
    </div>
};

export default MyPost;