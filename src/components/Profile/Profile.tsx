import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    state: {
        posts: PostType[],
    },
}

const Profile = (props: ProfilePropsType) => {
    const {
        state: { posts }
    } = props;

    return (
        <main>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </main>
    );
};

export default Profile;