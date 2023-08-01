import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/Login/Login";
import {useEffect} from "react";
import {connect} from "react-redux";
import {getAuthTC} from "./state/authReducer";
import {compose} from "redux";

type PropsType = MapDispatchToPropsType

const App = ({getAuthTC}: PropsType) => {

    useEffect(() => {
        getAuthTC()
    }, [])

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

type MapDispatchToPropsType = {
    getAuthTC: () => void
}

export default compose<React.ComponentType>(
    withRouter,
    connect(null,{getAuthTC})
)(App)



