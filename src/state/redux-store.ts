import {AnyAction, applyMiddleware, combineReducers, compose, legacy_createStore} from "redux";
import profileReducer, {ActionType as ProfileActionType} from "./reducers/profileReducer";
import dialogsReducer, {ActionType as DialogsActionType} from "./reducers/dialogsReducer";
import sidebarReducer, {ActionType as SidebarActionType} from "./reducers/sidebarReducer";
import usersReducer, {ActionType as UsersActionType} from "./reducers/usersReducer";
import authReducer, {ActionType as AuthActionType} from "./reducers/authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as form} from 'redux-form'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import appReducer from "./reducers/appReducer";

let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer,
    appReducer,
    form
});

export type AppStateType = ReturnType<typeof rootReducer>

//export type StoreType = typeof store;
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = legacy_createStore(rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
);
// const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<void, AppStateType, unknown, AppActionsType>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatchType>()
export type AppActionsType = AuthActionType
    | DialogsActionType
    | ProfileActionType
    | SidebarActionType
    | UsersActionType

//@ts-ignore
window.store = store
// export type ReduxStateType = ReturnType<typeof store.getState>;

export default store;