import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {subscribe} from "./redux/state";
import {addPost, StateType, updateNewPostText} from './redux/state'


export let renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>,
        document.getElementById('root')
    );
}



renderEntireTree(state);
subscribe(renderEntireTree);