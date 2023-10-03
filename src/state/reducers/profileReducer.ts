import {PostType} from "../../components/Profile/MyPosts/MyPostsContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

export type ActionType = AddPostActionCreatorType
    | SetUserProfileACType
    | SetUserStatusACType
    | DeletePostActionCreatorType

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'By', likesCount: 1},
        {id: 3, message: 'Hello', likesCount: 10},
        {id: 4, message: 'Good by', likesCount: 11},
    ] as PostType[],
    profile: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: true,
        lookingForAJobDescription: null,
        fullName: "My Name",
        userId: undefined,
        photos: {
            small: null,
            large: null
        }
    },
    status: 'initial status'
}

type StateType = typeof initialState

const profileReducer = (state: StateType = initialState, action: ActionType): StateType => {
    switch (action.type) {

        case ADD_POST:
            const newPost: PostType = {
                id: Math.random(),
                message: action.payload.post,
                likesCount: 0,
            }

            return {
                ...state,
                posts: [...state.posts, newPost],
            };

        case DELETE_POST:

            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.payload.postId),
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS:
            return {...state, status: action.status}

        default:
            return state;
    }
}

type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (post: string) => ({type: ADD_POST, payload: {post}} as const)

type DeletePostActionCreatorType = ReturnType<typeof deletePostActionCreator>
export const deletePostActionCreator = (postId: number) => ({type: DELETE_POST, payload: {postId}} as const)

type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)

type SetUserStatusACType = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => ({type: SET_STATUS, status} as const)


//getProfile
export const getProfileTC = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(response.data));
}

export const getStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    dispatch(setUserStatus(response.data));
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export default profileReducer;

