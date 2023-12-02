import './App.css';
import React, {Suspense, useEffect} from 'react'
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import {connect, Provider, useDispatch} from "react-redux";
import {AnyAction, compose} from "redux";
import {initializeApp} from "./state/reducers/appReducer";
import store, {AppStateType} from "./state/redux-store";
import Preloader from "./components/Preloader/Preloader";


// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

type PropsType = MapDispatchToPropsType & MapStateToPropsType

const App = ({initializeApp, initialized, isAuth}: PropsType) => {
    const dispatch = useDispatch()
    // const [auth, setAuth] = useState(store.getState().authReducer.isAuth)
    let wrapperStyle, wrapperBlock
    // let isAuth = store.getState().authReducer.isAuth

    let catchAllUnhandledErrors = (promiseRejectionEvent: PromiseRejectionEvent) => {
        alert('Some error occured')
    }

    useEffect(() => {
        initializeApp()
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors)

        return () => {
            window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
        }
    }, [])

    if (!initialized) return <Preloader/>

    // const isAuth = store.getState().authReducer.isAuth

    if (!isAuth) {
        wrapperStyle = 'app-wrapper' + ` wrapperDirection`
        wrapperBlock = 'wrapperBlockBackground'
    } else {
        wrapperStyle = 'app-wrapper'
        wrapperBlock = null
    }

    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className={`${wrapperStyle}`}>
                {
                    isAuth
                        ? <Navbar/>
                        : <LoginContainer/>
                }

                <div className={`app-wrapper-block ${wrapperBlock}`}>
                    <HeaderContainer/>

                    <div className='app-wrapper-content'>
                        <Suspense fallback={<div><Preloader/></div>}>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/login' render={() => <LoginContainer/>}/>
                        </Suspense>
                    </div>
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
    initialized: state.appReducer.initialized,
    isAuth: state.authReducer.isAuth
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



