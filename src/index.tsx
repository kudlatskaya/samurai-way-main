import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {ReduxStateType}  from "./redux/redux-store";
import {StateType} from "./redux/state"


export let renderEntireTree = (state: ReduxStateType) => {

    ReactDOM.render(
        <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});