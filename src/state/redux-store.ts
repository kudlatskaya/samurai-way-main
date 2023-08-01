import {AnyAction, applyMiddleware, combineReducers, legacy_createStore} from "redux";
import profileReducer, {ActionType as ProfileActionType} from "./profileReducer";
import dialogsReducer, {ActionType as DialogsActionType} from "./dialogsReducer";
import sidebarReducer, {ActionType as SidebarActionType} from "./sidebarReducer";
import usersReducer, {ActionType as UsersActionType} from "./usersReducer";
import authReducer, {ActionType as AuthActionType} from "./authReducer";
import thunkMiddleware, {ThunkAction, ThunkDispatch} from 'redux-thunk'
import {reducer as form} from 'redux-form'
import {TypedUseSelectorHook, useSelector} from "react-redux";


let rootReducer = combineReducers({
    profileReducer,
    dialogsReducer,
    sidebarReducer,
    usersReducer,
    authReducer,
    form
});

export type AppStateType = ReturnType<typeof rootReducer>

//export type StoreType = typeof store;
const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>
export type AppThunk<ReturnType = void> = ThunkAction<void, AppStateType, unknown, AppActionsType>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
export type AppActionsType = AuthActionType
    | DialogsActionType
    | ProfileActionType
    | SidebarActionType
    | UsersActionType

//@ts-ignore
window.store = store
// export type ReduxStateType = ReturnType<typeof store.getState>;

export default store;