import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {ActionType, PostType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    profilePage: {
        posts: PostType[],
        newPostText: string,
    },
    dispatch: (action: ActionType) => void,
}

const Profile = (props: any) => {
    const { store } = props;

    return (
        <main>
            <ProfileInfo/>
            <MyPostsContainer store={store}/>
        </main>
    );
};

export default Profile;