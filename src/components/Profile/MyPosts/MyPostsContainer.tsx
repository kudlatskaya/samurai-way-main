import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/profileReducer';
import {ActionType, PostType} from "../../../redux/state";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";
import React from "react";


type MyPostsPropsType = {
    store: {
        dispatch: (action: ActionType) => void,
        posts: PostType[],
    }
}

const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        {
            store => {
                let state = store.getState();

                let onClickAddPostHandler = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onChangePost = (text: string) => {
                    text && store.dispatch(updateNewPostTextActionCreator(text));
                }

                return <MyPosts updateNewPostText={onChangePost}
                                addPost={onClickAddPostHandler}
                                posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}/>
            }
        }
    </StoreContext.Consumer>
};

export default MyPostsContainer;