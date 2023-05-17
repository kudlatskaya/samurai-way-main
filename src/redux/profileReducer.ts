import {PostType} from "../components/Profile/MyPosts/MyPostsContainer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

type ActionType = AddPostActionCreatorType | UpdateNewPostTextActionCreatorType | SetUserProfileACType

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'By', likesCount: 1},
        {id: 3, message: 'Hello', likesCount: 10},
        {id: 4, message: 'Good by', likesCount: 11},
    ] as PostType[],
    newPostText: '',
    profile: {},
}

type StateType = typeof initialState

const profileReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {

        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;
    }
}

type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = () => ({type: ADD_POST} as const)

type UpdateNewPostTextActionCreatorType = ReturnType<typeof updateNewPostTextActionCreator>
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)

type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)

export default profileReducer;

