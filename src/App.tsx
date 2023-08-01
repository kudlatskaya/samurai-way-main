import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import {useEffect} from "react";
import {connect, useDispatch} from "react-redux";
import {AnyAction, compose} from "redux";
import {initializeApp} from "./state/reducers/appReducer";
import {AppStateType, useAppDispatch} from "./state/redux-store";
import Preloader from "./components/Preloader/Preloader";

type PropsType = MapDispatchToPropsType & MapStateToPropsType

const App = ({initializeApp, initialized}: PropsType) => {
    const dispatch = useDispatch()

    useEffect(() => {
         // dispatch(initializeApp())
         initializeApp()

    }, [])

    if(!initialized) return <Preloader />

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId' render={() => <ProfileContainer/>} />
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <LoginContainer />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

type MapDispatchToPropsType =  {
     initializeApp: () => AnyAction
 }

type MapStateToPropsType = ReturnType<typeof mapStateToProps>

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.appReducer.initialized
})

export default compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps,{initializeApp})
)(App)



