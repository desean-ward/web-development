import React, { Component } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component.jsx';
import './sign-in.styles.scss';

import { signInWithGoogle } from '../../firebase/firebase.utils.js';

/* Create a class component to store state */
class SignIn extends Component {
    constructor (props) {
        super (props);

        this.state = {
            email: '',
            password: ''
        }
    }

    /* Prevent default event from firing */
    handleSubmit = event => {
        event.preventDefault();

        /* Clear out the state */
        this.setState({ email: '', password: ''});
    }

    /* Handles the change of Input  AND password fields*/
    handleChange = event => {
        /* Pull value and name off of target */
        const { value, name } = event.target;

        this.setState({ [name]: value });

    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
            
                <form onSubmit={ this.handleSubmit }>
                    <FormInput
                        type='email' 
                        name='email' 
                        value={ this.state.email }
                        label="Email"
                        handleChange={ this.handleChange } 
                        required />
                    
                    <FormInput 
                        type='password'
                        name='password' 
                        value={ this.state.email }
                        label="Password"
                        handleChange={ this.handleChange }
                        required />

                    <div className='buttons'>
                        <CustomButton className='custom-button' type='submit'>Sign In</CustomButton>
                        <CustomButton
                            onClick={ signInWithGoogle } isGoogleSignIn>
                            {' '}
                            Sign In With Google{' '}
                        </CustomButton>
                    </div>
                </form>
            
                </div>
        );
    }

}

export default SignIn;