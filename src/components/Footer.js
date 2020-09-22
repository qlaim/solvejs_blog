import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Footer() {
    return (
        <div id='footer-menu'>
            <NavLink to='/' className='footerlink-class' activeStyle={{backgroundColor: 'blue', color: 'white', fontWeight: 'bolder'}} strict>Home</NavLink>
            <NavLink to='/FAQs' className='footerlink-class'>FAQs</NavLink>
            <NavLink to='/Resources' className='footerlink-class'>Resources</NavLink>
            <NavLink to='/terms' className='footerlink-class'>Cookies & Terms</NavLink>
        </div>
    )
}