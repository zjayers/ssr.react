import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = (props) => {
    console.log('Authenticated: ' + props.auth);

    const authButton = props.auth ? (
        <a href={'/api/logout'}>Logout</a>
    ) : (
        <a href={'/api/auth/google'}>Login</a>
    );
    return (
        <div>
            <Link to={'/'}>React SSR</Link>
            <div>
                <Link to={'/users'}>Users</Link>
                <Link to={'/admins'}>Admins</Link>
                {authButton}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
