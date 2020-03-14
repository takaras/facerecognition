import React from 'react';
import Logo from '../Logo/Logo';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav>
        <Logo />
        <p
          onClick={() => onRouteChange('signin')}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign out
        </p>
      </nav>
    );
  } else {
    return (
      <nav>
        <Logo />
        <div className="nav-bar">
          <p
            onClick={() => onRouteChange('signin')}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign in
          </p>
          <p
            onClick={() => onRouteChange('register')}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
