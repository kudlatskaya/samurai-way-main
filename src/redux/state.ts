export type MessageType = {
    id: number,
    message: string,
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

export type DialogType = {
    id: number,
    name: string,
}

export type StateType = {
    profilePage: {
        posts: PostType[],
    },
    dialogsPage: {
        dialogs: DialogType[],
        messages: MessageType[],
    }
}

let state: StateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'By', likesCount: 1},
            {id: 3, message: 'Hello', likesCount: 10},
            {id: 4, message: 'Good by', likesCount: 11},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Viktor'},
            {id: 5, name: 'Masha'},
            {id: 6, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'hi hi'},
            {id: 3, message: 'hi hi hi'},
            {id: 4, message: 'hi hi hi hi'},
        ],
    }
}
export let addPost = (postMessage: string) => {
    let newPost: PostType = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    }

    state.profilePage.posts.push(newPost)
}

export default state;