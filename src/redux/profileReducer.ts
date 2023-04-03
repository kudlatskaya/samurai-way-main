import {ActionType, PostType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'By', likesCount: 1},
            {id: 3, message: 'Hello', likesCount: 10},
            {id: 4, message: 'Good by', likesCount: 11},
        ],
        newPostText: 'it-kamasutra.c',
    }

const profileReducer = (state = initialState, action: {type: string, newText: string,}) => {
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

