import React, { Component } from 'react';
import Landing from '../Landing/Landing';
import Login from '../login/Login';
import Register from '../register/Register';
import { BrowserRouter as Route, NavLink } from "react-router-dom";
import './Header.scss';


class Header extends Component {
    render() {

        return (
            <div>
                <nav>
                    <div className="nav-wrapper">
                        <NavLink to="/" className="brand-logo">TaskIt</NavLink>
                        <ul id="nav-mobile" className="right">
                            <li ><NavLink to="/login" activeClassName="current" >Login</NavLink></li>
                            <li><NavLink to="/register"activeClassName="current" >Register</NavLink></li>
                        </ul>
                    </div>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/login/" component={Login} />
                    <Route exact path="/register" component={Register} />
                </nav>
            </div >
        );
    }
}

export default Header;