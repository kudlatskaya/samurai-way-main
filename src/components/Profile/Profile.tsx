import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {PostType} from "../../index";

type ProfilePropsType = {
    posts: PostType[],
}

const Profile = (props: ProfilePropsType) => {
    const {posts} = props;

    return (
        <main>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </main>
    );
};

export default Profile;