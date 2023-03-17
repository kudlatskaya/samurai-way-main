import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {StateType}  from "./redux/state";

export let renderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>,
        document.getElementById('root')
    );
}



renderEntireTree(store.getState());
store.subscribe(renderEntireTree);