import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {ReduxStateType} from "./redux/redux-store";
import _store from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";
import {Provider} from "./StoreContext";

export let renderEntireTree = (state: ReduxStateType) => {

    ReactDOM.render(
        // <App state={store.getState()} dispatch={store.dispatch.bind(store)} />,
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderEntireTree(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});