import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return [
                    <li><a href="/login">Login</a></li>,
                    <li><a href="/register">Register</a></li>
                ];
            default:
                return [
                    <li><a href="/dashboard">Dashboard</a></li>,
                    <li><a href="/logout">Logout</a></li>
                ];
        }
    }

    render() {
        return (
            <nav>
                <Link
                    to="/"
                    className="brand-logo"
                >
                    TaskIt
                </Link>
                <ul>
                    {this.renderContent()}
                </ul>
            </nav>
        )
    }
}

export default Header;