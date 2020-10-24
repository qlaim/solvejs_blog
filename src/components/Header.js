import React, { useState } from 'react';
import {BrowserRouter as Router, Link, Switch, NavLink} from 'react-router-dom';

function Header() {
    const menuLinks = [
        {to: '/', name: 'Home', strict: 'strict', activeItem: null},
    {to: '/projects', name: 'Projects', strict: false, activeItem: null},
    {to: '/goals', name: 'Goals', strict: false, activeItem: null},
    {to: '/about', name: 'About', strict: false, activeItem: null},
    {to: '/login', name: 'Login', strict: false, activeItem: null},
    {to: '/admin-panel', name: 'Admin', strict: false, activeItem: null},
    
    ];
    const activeStyling=
    {backgroundColor: '#73817C', color: 'black', fontWeight: 'bold'}
    return (
        <div id='header' style={{width: '90vw', margin: 'auto', position: 'fixed', top: 0, left: 'auto', height: '70px', marginBottom: '80px', backgroundColor: 'white', color: '#00b5ff', lineHeight: '100%', fontSize: '2em'}}>
        <div className='header-text'>
            <a href='/'>
                <h1 style={{width: 'max-content', margin: 'auto'}}><span style={{color: 'black'}}>&lt;</span>S o l v e J S <span style={{color: 'black'}}>&#47;&gt;</span> Learning Past Yet</h1>
            </a>
        </div>
        <div id='nav-menu'>
            {menuLinks.map(item => 
                <button key={item.name}><NavLink to={item.to} key={item.name} className='navlink-class' activeStyle={activeStyling} 
                activeClassName={'active'} strict={item.strict ? true : false} isActive={(match, location) => {if(!match) {return false} else if(location.pathname === item.to) return true}}>{item.name}</NavLink> 
                </button>
            )}
        </div>
        </div>
    )
}

export {Header};