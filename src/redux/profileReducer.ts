import {PostType} from "../components/Profile/MyPosts/MyPostsContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

type ActionType = AddPostActionCreatorType
    | SetUserProfileACType
    | SetUserStatusACType

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

type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)

type SetUserStatusACType = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => ({type: SET_STATUS, status} as const)


//getProfile
export const getProfileTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        })
}

export const getStatusTC = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setUserStatus(response.data));
        })
}

export const updateStatusTC = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setUserStatus(status));
            }
        })
}

export default profileReducer;

