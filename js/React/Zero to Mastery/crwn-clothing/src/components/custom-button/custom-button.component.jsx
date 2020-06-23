import React from 'react';

import './custom-button.styles.scss';

/* Pull the 'children' from passed props, and destructure 'otherProps' */
const CustomButton = ({ children, ...otherProps }) => (
    <button className='custom-button' {...otherProps}>
        { children }
    </button>
)

export default CustomButton;