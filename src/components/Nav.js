import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import ButtonNav from './ButtonNav';
import logoDark from '../logo/logo_small_icon_only_inverted.png';
import logoLight from '../logo/logo_small_icon_only.png';
import './nav.css';

const Nav = () => {
    const [active, setActive] = useState(false);
    const dark = true;
    return (
        <nav className={active ? "nav active" : "nav"}>
            <Link to="/" className='container'>
                <img className='logo' src={!dark ? logoDark : logoLight} alt="logo" />
            </Link>

            <ButtonNav setActive={setActive} active={active} />

            <ul className='ul'>
                <li className='li'>
                    <NavLink className={({isActive})=> (isActive ? 'btn active' : 'btn')} to="/" >
                        <span>Home</span>
                        <div className='sub-line'></div>
                    </NavLink>
                </li>
                <li className='li'>
                    <NavLink className={({isActive})=> (isActive ? 'btn active' : 'btn')} to="/category" >
                        <span>Services</span>
                        <div className='sub-line'></div>
                    </NavLink>
                </li>
                <li className='li'>
                    <NavLink className={({isActive})=> (isActive ? 'btn active' : 'btn')} to="/category" >
                        <span>Users</span>
                        <div className='sub-line'></div>
                    </NavLink>
                </li>
                <li className='li'>
                    <NavLink className={({isActive})=> (isActive ? 'btn active' : 'btn')} to="/category" >
                        <span>Coments</span>
                        <div className='sub-line'></div>
                    </NavLink>
                </li>
                <li className='li'>
                    <NavLink className={({isActive})=> (isActive ? 'btn active' : 'btn')} to="/category" >
                        <span>About</span>
                        <div className='sub-line'></div>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav