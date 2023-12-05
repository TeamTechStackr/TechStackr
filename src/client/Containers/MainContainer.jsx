import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import RetrieveDisplay from './RetrieveDisplay';
import AddDisplay from './AddDisplay';

const Maincontainer = () => {
    return (
            <div>
                MainContainer
            <Router>
                <NavBar/>
                <Routes>
                   <Route path='/' element={<AddDisplay/>}/>
                   <Route path='/' element={<RetrieveDisplay/>}/>
                </Routes>
            </Router>

            </div>

    )
};


export default Maincontainer;