import React from 'react';
import LoginFormContainer from '../sessions/login_form_container'
import SignupFormContainer from '../sessions/signup_form_container'

class UserSession extends React.Component {
    render() {
        return (
            <div className='profile-container-wrapper'>
                <div className='profile-container'>
                    <div className='profile-container-top-sectioin'>
                        <h1 className='profile-container-header'>Let's be friends with benefits</h1>
                        <p className='profile-container-body-text'>Here are just a few ways we can make it all about you:</p>
                    </div>    
                        <div className='profile-container-icons-holder'>
                            <div className='profile-container-icon'>
                                <div className='icon-log'>
                                <i className="fas fa-box-open"></i>
                                </div>
                                <p className='icon-description'>
                                    Quick order and return tracking
                                </p>
                            </div>
                            <div className='profile-container-icon'>
                                <div className='icon-log'>
                                <i className="fas fa-credit-card"></i>
                                </div>
                                <p className='icon-description'>
                                    Store shipping and payment information securely
                                </p>
                            </div>
                            <div className='profile-container-icon'>
                                <div className='icon-log'>
                                <i className="far fa-heart"></i> 
                                </div>
                                <p className='icon-description'>
                                    Access to your favourites
                                </p>
                            </div>
                            <div className='profile-container-icon'>
                                <div className='icon-log'>
                                <i className="far fa-comment"></i>
                                </div>
                                <p className='icon-description'>
                                    Instant product reviewer status
                                </p>
                            </div>
                            <div className='profile-container-icon'>
                                <div className='icon-log'>
                                <i className="fas fa-shopping-bag"></i>
                                </div>
                                <p className='icon-description'>
                                    Get a tailored shopping experience
                                </p>
                            </div>
                        </div>
                        <div className='user-session-wrapper'>
                            <div className='sign-in-form-wrapper'>
                                <div className='sign-in-container'>
                                    <h4 className='sign-in-form-title'>
                                        SIGN IN TO YOUR ACCOUNT
                                    </h4>
                                    <div>
                                        <LoginFormContainer />
                                    </div>
                                </div>
                            </div>
                            <div className='user-session-border'></div>
                            <div className='sign-up-form-wrapper'>
                                <div className='sign-up-container'>
                                    <h4 className='sign-up-form-title'>
                                        CREATE AN ACCOUNT
                                    </h4>
                                    <div className='signup-container'>
                                        <SignupFormContainer />
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
             
        )
    }
}

export default UserSession;