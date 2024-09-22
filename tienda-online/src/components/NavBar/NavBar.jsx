import React from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <ul className="navbar">
            <NavLink to= {'/'} className="itemListNav">Home</NavLink>
            <NavLink to= {'/category/smartphone'} className="itemListNav">SmartPhone</NavLink>
            <NavLink to= {'/category/notebook'} className="itemListNav">Notebook</NavLink>
            <NavLink to= {'/category/tablet'} className="itemListNav">Tablet</NavLink>
            <NavLink to= {'/cartwidget'} className="itemListNav">Cart</NavLink>
            
        </ul>
    )
}

export default NavBar;