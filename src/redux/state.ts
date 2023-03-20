const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
        newPostText: string,
    },
    dialogsPage: {
        dialogs: DialogType[],
        messages: MessageType[],
    },
    sidebar: [],
}

export type ActionType = {
    type: string,
    newText?: string,
}

export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _addPost: () => void,
    _updateNewPostText: (newText: string) => void,
    _callSubscriber: (state: StateType) => void,
    subscribe: (observer: (state: StateType) => void) => void,
    dispatch: (action: ActionType) => void,
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi', likesCount: 12},
                {id: 2, message: 'By', likesCount: 1},
                {id: 3, message: 'Hello', likesCount: 10},
                {id: 4, message: 'Good by', likesCount: 11},
            ],
            newPostText: 'it-kamasutra.c',
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
        },
        sidebar: [],
    },

    _callSubscriber() {},

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    _addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        }

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if(action.type === ADD_POST) {
            this._addPost();
        }
        else if(action.type === UPDATE_NEW_POST_TEXT) {
            action.newText && this._updateNewPostText(action.newText);
        }

    }
}

export const addPostActionCreator = (): ActionType => ({ type: ADD_POST, })

export const updateNewPostTextActionCreator = (text: string): ActionType =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text, })


export default store;