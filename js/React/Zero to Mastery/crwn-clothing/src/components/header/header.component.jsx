import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crwn-logo.svg';
import { auth } from '../../firebase/firebase.utils.js';

import './header.styles.scss';

/* Destructure the currentUser property */
const Header = ({ currentUser }) => (
    <div className = 'header'>
        <Link className='logo-container' to="/">
        <Logo className='logo' />
        </Link>

        <div class='options'>
        <Link className='option' to='/shop'>SHOP</Link>

        <Link className='option' to='/shop'>CONTACT</Link>
        
        {
            /* Conditionally render a 'div' if currentUser is an object,
            or a 'Link' if it's false */
            currentUser ?
            <div className='option' onClick={() => auth.signOut()}>
                SIGN OUT
            </div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        </div>
    </div>
)

export default Header;