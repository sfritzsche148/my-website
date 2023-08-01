import React from 'react'
import { Link } from 'react-router-dom';
import { TiCodeOutline } from 'react-icons/ti'

function Navbar() {
  return (
    <nav>
        <div className='nav-logo'>
            <Link className='logo-link'>
                <TiCodeOutline className='nav-icon' />
                Sebastian Fritzsche
            </Link>
        </div>
        <ul className='nav-list'>
            <li className='nav-list-item'>Über mich</li>
            <li className='nav-list-item'>Videos</li>
            <li className='nav-list-item'>Portfolio</li>
        </ul>
    </nav>
  )
}

export default Navbar;