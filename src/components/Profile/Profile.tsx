import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.img}></div>
            <div className={s.userInfo}>
                <div className={s.userAvatar}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCTtwxGDbjnpPgVZznNqUH757TIfzheMk6w&usqp=CAU" alt=""/></div>
                <div className={s.userName}>
                    <p>My name</p>
                    <p>My age</p>
                    <p>My city</p>
                </div>
            </div>
            <MyPosts />
        </main>
    );
};

export default Profile;