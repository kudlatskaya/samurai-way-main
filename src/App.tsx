import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType,
    addPost: (postMessage: string) => void,
}

const App = (props: AppPropsType) => {
    const {
        state: { profilePage, dialogsPage },
        addPost,
    } = props;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={ () => <Dialogs state={dialogsPage}/> }/>
                    <Route path='/profile' render={ () => <Profile state={profilePage} addPost={addPost}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
