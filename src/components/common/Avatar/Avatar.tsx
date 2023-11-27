import React from 'react';
import s from "./Avatar.module.css";
import avatar from "../../../asets/images/avatar.jpg";

const Avatar = () => {
    return (
        <div className={s.avatar}>
            <img src={avatar} alt=""/>
        </div>
    );
};

export default Avatar;