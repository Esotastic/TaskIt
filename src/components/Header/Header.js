import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
    render() {

        return (
            <div>
                <nav className="Nav">
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">TaskIt</a>
                        <ul id="nav-mobile" className="right">
                            <li ><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                        </ul>
                    </div>
                </nav>
            </div >
        );
    }
}

export default Header;