import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store, {ReduxStateType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

export let renderEntireTree = (state: ReduxStateType) => {

    ReactDOM.render(
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