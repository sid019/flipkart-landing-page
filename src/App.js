import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import Banner from './Banner';
import './App.css';
const App = () => {
    return(
        <>
            <div> <Navbar /> </div>
            <div> <Body /> </div>
            <div> <Banner /> </div>
            
        </>
    );
}

export default App;