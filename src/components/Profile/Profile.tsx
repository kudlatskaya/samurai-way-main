import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {PostType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: {
        posts: PostType[],
        newPostText: string,
    },
    addPost: (postMessage: string) => void,
}

const Profile = (props: ProfilePropsType) => {
    const {
        profilePage: { posts, newPostText },
        addPost,
    } = props;

    return (
        <main>
            <ProfileInfo/>
            <MyPosts posts={posts} newPostText={newPostText} addPost={addPost}/>
        </main>
    );
};

export default Profile;