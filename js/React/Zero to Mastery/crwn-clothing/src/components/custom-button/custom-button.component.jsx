import React from 'react';

import './custom-button.styles.scss';

/* Pull the 'children' from passed props, and destructure 'otherProps' */
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button 
    /* Add the class 'google-sign-in' if isGoogleSignIn is true */ 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        { children }
    </button>
);

export default CustomButton;