import React from 'react';
import s from "./Profile.module.css"

const Profile = () => {
    return (
        <main className={s.content}>
            <div className={s.img}></div>
            <div>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCTtwxGDbjnpPgVZznNqUH757TIfzheMk6w&usqp=CAU" alt=""/></div>
                <div></div>
            </div>
            <div className={s.posts}>My posts
                <div>new post</div>
            </div>
            <div>
                <div className={s.item}>post1</div>
                <div className={s.item}>post1</div>
                <div className={s.item}>post1</div>
            </div>
        </main>
    );
};

export default Profile;