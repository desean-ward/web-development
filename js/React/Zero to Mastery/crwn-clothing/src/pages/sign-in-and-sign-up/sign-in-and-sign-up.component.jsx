import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'

import './sign-in-and-sign-up.styles.scss';

/* Houses the Sign In and Sign Out Components */
/* Does not hold state */
const SignInAndSignUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn />
    </div>
);

export default SignInAndSignUpPage;