import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

import styles from './Header.scss';

class Header extends Component {
    //     renderContent() {
    //         switch (this.props.auth) {
    //             case null:
    //                 return;
    //             case false:
    //                 return [
    //                     <li><a href="/login">Login</a></li>,
    //                     <li><a href="/register">Register</a></li>
    //                 ];
    //             default:
    //                 return [
    //                     <li><a href="/dashboard">Dashboard</a></li>,
    //                     <li><a href="/logout">Logout</a></li>
    //                 ];
    //         }
    //     }

    render() {

        return (
            <div>
                <nav className={styles.Nav}>
                    <div className="nav-wrapper">
                        <a href="#" class="brand-logo">TaskIt</a>
                        <ul id="nav-mobile" class="right">
                            <li ><a href="login.html">Login</a></li>
                            <li><a href="#">Link 02</a></li>
                            <li><a href="#">Link 03</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            //             <nav>
            //                 <Link
            //                     to="/"
            //                     className="brand-logo"
            //                 >
            //                     TaskIt
            //                 </Link>
            //                 <ul>
            //                     {this.renderContent()}
            //                 </ul>
            //             </nav>
        );
    }
}

export default Header;