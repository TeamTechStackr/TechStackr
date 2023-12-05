import React from 'react';
import { Router, Routes, Route} from 'react-router-dom';
import NavBar from '../Components/NavBar';
import RetrieveDisplay from './RetrieveDisplay';
import AddDisplay from './AddDisplay';

const Maincontainer = () => {
    return (
        <div>
            <h1>MainContainer</h1>
            <Router>
                {/*navigation bar with 'add' and 'retrieve' buttons*/}
                <NavBar/>
                <Routes>
                   <Route path='/' element={<AddDisplay/>}/>
                   <Route path='/retrieve' element={<RetrieveDisplay/>}/>
                </Routes>
            </Router>
        </div>

    )
};


export default Maincontainer;