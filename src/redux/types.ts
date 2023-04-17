export type MessageType = {
    id: number,
    message: string,
}

export type PostType = { //++
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
        newMessageBody: string,
    },
    sidebar: {},
}
