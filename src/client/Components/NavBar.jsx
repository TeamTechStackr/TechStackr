import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div>
            <Link to='/'><button>add</button></Link>
            <Link to='/retrieve'><button>retrieve</button></Link>
        </div>
    )
}

export default NavBar;