import React from 'react';
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo";
import {ActionType, PostType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: {
        posts: PostType[],
        newPostText: string,
    },
    dispatch: (action: ActionType) => void,
}

const Profile = (props: ProfilePropsType) => {
    const {
        profilePage: { posts, newPostText },
        dispatch,
    } = props;

    return (
        <main>
            <ProfileInfo/>
            <MyPosts posts={posts}
                     newPostText={newPostText}
                     dispatch={dispatch}/>
        </main>
    );
};

export default Profile;