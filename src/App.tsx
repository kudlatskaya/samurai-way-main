import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostType, DialogType, MessageType} from "./index";

type AppPropsType = {
    posts: PostType[],
    dialogs: DialogType[],
    messages: MessageType[],
}

//let SomeComponent = () =>  <Dialogs dialogs={dialogs}/>

const App = (props: AppPropsType) => {
    const {posts, dialogs, messages} = props;

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}
                    <Route path='/dialogs' render={ () =>  <Dialogs dialogs={dialogs} messages={messages}/> }/>
                    <Route path='/profile' render={ () => <Profile posts={posts}/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
