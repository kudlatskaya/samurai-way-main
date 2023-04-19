import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";

let rootReducer =  combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

export type StoreType = typeof store;
const store = legacy_createStore(rootReducer);


// export type ReduxStateType = ReturnType<typeof store.getState>;

export default store;