import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div>
            <Link to='/'><p>add</p></Link>
            <Link to='/retrieve'><p>retrieve</p></Link>
        </div>
    )
}

export default NavBar;