import {combineReducers, legacy_createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let rootReducer =  combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>

//export type StoreType = typeof store;
const store = legacy_createStore(rootReducer);

//@ts-ignore
//window.store=store
// export type ReduxStateType = ReturnType<typeof store.getState>;

export default store;