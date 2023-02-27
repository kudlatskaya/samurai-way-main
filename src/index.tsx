import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type PostType = {
    id: number,
    message: string,
    likesCount: number,
}

let myPostsData: PostType[] = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: 'By', likesCount: 1},
    {id: 3, message: 'Hello', likesCount: 10},
    {id: 4, message: 'Good by', likesCount: 11},
]

ReactDOM.render(
    <App posts={myPostsData}/>,
  document.getElementById('root')
);