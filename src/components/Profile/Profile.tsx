import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    state: {
        posts: PostType[],
    },
    addPost: (postMessage: string) => void,
}

const Profile = (props: ProfilePropsType) => {
    const {
        state: { posts },
        addPost,
    } = props;

    return (
        <main>
            <ProfileInfo/>
            <MyPosts posts={posts} addPost={addPost}/>
        </main>
    );
};

export default Profile;