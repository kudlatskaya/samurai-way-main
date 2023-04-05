import {combineReducers, createStore, legacy_createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let reducers =  combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
});

//legacy_createStore
// let store = createStore(reducers);
let store = legacy_createStore(reducers);


export type StoreType = typeof store;
export type ReduxStateType = ReturnType<typeof store.getState>;

export default store;