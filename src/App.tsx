import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'></header>
            <nav className='nav'>
                <div><a href="">Profile</a></div>
                <div><a href="">Messages</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <main className='content'>
                <div className='img'></div>
                <div>
                    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShCTtwxGDbjnpPgVZznNqUH757TIfzheMk6w&usqp=CAU" alt=""/></div>
                    <div></div>
                </div>
                <div>My posts
                    <div>new post</div>
                </div>
                <div>
                    <div>post1</div>
                    <div>post1</div>
                    <div>post1</div>
                </div>
            </main>
            <footer></footer>
        </div>
    );
}


export default App;
