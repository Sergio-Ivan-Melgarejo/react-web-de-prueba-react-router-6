import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../logo/logo.svg';
import './nav.css';

const Nav = () => {
    return (
        <nav className='nav'>
            <Link to="/" className='container'>
                <img className='logo' src={logo} alt="logo" />
            </Link>
            <ul className='ul'>
                <li className='li'>
                    <NavLink className={({isActive})=> (isActive ? 'btn active' : 'btn')} to="/" >
                        <span>Home</span>
                        <div className='sub-line'></div>
                    </NavLink>
                </li>
                <li className='li'>
                    <NavLink className={({isActive})=> (isActive ? 'btn active' : 'btn')} to="/category" >
                        <span>Category</span>
                        <div className='sub-line'></div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav