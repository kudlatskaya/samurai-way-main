import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateType, ActionType} from "./redux/state";
import {ReduxStateType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: StateType,
    dispatch: (action: ActionType) => void,
}

const App = (props: any) => {
    // const {
    //     state: { profilePage, dialogsPage },
    //     dispatch,
    // } = props;
    const { store } = props;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={ () => <DialogsContainer store={props.store}/> }/>
                    <Route path='/profile' render={ () => <Profile store={props.store}/> } />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
