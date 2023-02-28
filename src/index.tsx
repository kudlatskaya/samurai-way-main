import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


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

let myPostsData: PostType[] = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: 'By', likesCount: 1},
    {id: 3, message: 'Hello', likesCount: 10},
    {id: 4, message: 'Good by', likesCount: 11},
]

let dialogsData: DialogType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Masha'},
    {id: 6, name: 'Valera'},
]

let messagesData: MessageType[] = [
    {id: 1, message: 'hi'},
    {id: 2, message: 'hi hi'},
    {id: 3, message: 'hi hi hi'},
    {id: 4, message: 'hi hi hi hi'},
]

ReactDOM.render(
    <App posts={myPostsData} dialogs={dialogsData} messages={messagesData}/>,
    document.getElementById('root')
);