import {PostType} from "../../components/Profile/MyPosts/MyPostsContainer";
import {Dispatch} from "redux";
import {profileAPI} from "../../api/api";
import {ProfileType} from "../../components/Profile/ProfileContainer";
import { loremIpsum } from 'react-lorem-ipsum';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SET_PHOTOS_SUCCESS = 'SET_PHOTOS_SUCCESS';

export type ActionType = AddPostActionCreatorType
    | SetUserProfileACType
    | SetUserStatusACType
    | DeletePostActionCreatorType
    | SetPhotoSuccessACType

export type PhotosType = {
    small: null | string,
    large: null | string
}

let postText = loremIpsum()[0]

let initialState = {
    posts: [
        {id: 1, message: postText, likesCount: 12, title: "Post Title"},
        {id: 2, message: postText, likesCount: 1, title: "Post Title"},
        {id: 3, message: postText, likesCount: 10, title: "Post Title"},
        {id: 4, message: postText, likesCount: 11, title: "Post Title"},
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
                title: action.payload.title,
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

        case SET_PHOTOS_SUCCESS:
            return {...state, profile: {...state.profile, photos: action.photos}}

        default:
            return state;
    }
}

type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>
export const addPostActionCreator = (post: string, title: string) => ({type: ADD_POST, payload: {post, title}} as const)

type DeletePostActionCreatorType = ReturnType<typeof deletePostActionCreator>
export const deletePostActionCreator = (postId: number) => ({type: DELETE_POST, payload: {postId}} as const)

type SetUserProfileACType = ReturnType<typeof setUserProfile>
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)

type SetUserStatusACType = ReturnType<typeof setUserStatus>
export const setUserStatus = (status: string) => ({type: SET_STATUS, status} as const)

type SetPhotoSuccessACType = ReturnType<typeof setPhotoSuccess>
export const setPhotoSuccess = (photos: any) => ({type: SET_PHOTOS_SUCCESS, photos} as const)

export const getProfileTC = (userId: number) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getProfile(userId)

    dispatch(setUserProfile(response.data));
}

export const saveProfile = (profile: ProfileType, setStatus: (status: any) => void) => async (dispatch: any, getState: any) => {
    const userId = getState().authReducer.userId
    const response = await profileAPI.setProfile(profile)

    if (response.data.resultCode === 0) {
         dispatch(getProfileTC(userId));
    } else {
        setStatus({errors: response.data.messages})
        return Promise.reject(response.data.messages)
    }
}

export const getStatusTC = (userId: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.getStatus(userId)
    // console.log(response.data)
    dispatch(setUserStatus(response.data));
}

export const updateStatusTC = (status: string) => async (dispatch: Dispatch) => {
    const response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setUserStatus(status));
    }
}

export const savePhoto = (file: File) => async (dispatch: Dispatch) => {
    const response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos));
    }
}


export default profileReducer;

