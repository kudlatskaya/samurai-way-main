import profileReducer, {addPostActionCreator} from "./profileReducer";
import {PostType} from "../../components/Profile/MyPosts/MyPostsContainer";

let initialState = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'By', likesCount: 1},
        {id: 3, message: 'Hello', likesCount: 10},
        {id: 4, message: 'Good by', likesCount: 11},
    ],
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

test('length of posts should be incremented', () => {
    const action = addPostActionCreator("hello")
    const newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(5)
})

test('new post should be added', () => {
    const action = addPostActionCreator("hello")
    const newState = profileReducer(initialState, action)

    expect(newState.posts[4].message).toBe("hello")
})

test('after deleting length should be decremented', () => {
    const action = deletePost(1)
    const newState = profileReducer(initialState, action)

    expect(newState.posts.length).toBe(3)
})