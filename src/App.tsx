import './App.css';
import React, {Suspense} from 'react'
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import {useEffect} from "react";
import {connect, Provider, useDispatch} from "react-redux";
import {AnyAction, compose} from "redux";
import {initializeApp} from "./state/reducers/appReducer";
import store, {AppStateType, useAppDispatch} from "./state/redux-store";
import Preloader from "./components/Preloader/Preloader";

// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type PropsType = MapDispatchToPropsType & MapStateToPropsType

const App = ({initializeApp, initialized}: PropsType) => {
    const dispatch = useDispatch()

    useEffect(() => {
        // dispatch(initializeApp())
        initializeApp()

    }, [])

    if (!initialized) return <Preloader/>

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => {
                        return (
                            <Suspense fallback={<div>Loading...</div>}>
                                <DialogsContainer/>
                            </Suspense>
                        )
                    }}/>
                    <Route path='/profile/:userId' render={() => {
                        return (
                            <Suspense fallback={<div>Loading...</div>}>
                                <ProfileContainer/>
                            </Suspense>
                        )
                    }}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

type MapDispatchToPropsType = {
    initializeApp: () => AnyAction
}

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.appReducer.initialized
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

export const MainApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}



