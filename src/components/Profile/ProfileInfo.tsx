import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={s.userInfo}>
            <div className={s.img}></div>
            <div className={s.userAvatar}><img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCTtwxGDbjnpPgVZznNqUH757TIfzheMk6w&usqp=CAU"
                alt=""/></div>
            <div className={s.userName}>
                <p>My name</p>
                <p>My age</p>
                <p>My city</p>
            </div>
        </div>

    );
};

export default ProfileInfo;