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
    addPost: () => void,
    updateNewPostText: (newText: string) => void,
}

const Profile = (props: ProfilePropsType) => {
    const {
        profilePage: { posts, newPostText },
        addPost,
        updateNewPostText,
    } = props;

    return (
        <main>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}/>
        </main>
    );
};

export default Profile;