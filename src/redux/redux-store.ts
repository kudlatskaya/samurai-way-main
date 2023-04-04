import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducers =  combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
});

let store = createStore(reducers);

export type ReduxStateType = ReturnType<typeof store.getState>;

export default store;