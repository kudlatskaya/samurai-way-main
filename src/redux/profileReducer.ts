import {ActionType, PostType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: any, action: any): any => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }

            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;

        default:
            return state;
    }
}


export const addPostActionCreator = (): ActionType => ({ type: ADD_POST, })

export const updateNewPostTextActionCreator = (text: string): ActionType =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text, })

export default profileReducer;

