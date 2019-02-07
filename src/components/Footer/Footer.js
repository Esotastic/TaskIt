import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {

    render() {
        return (
            <div>
                <footer className="page-footer  light-blue darken-4">
                    <div className="footer-copyright light-blue darken-4">
                        <div className="container center-align">
                            <p className="grey-text text-lighten-4">TaskIt ©2019</p>
                            <a className="grey-text text-lighten-4" href="https://github.com/projectunic0rn" target="_blank" rel="noopener noreferrer">Project Unicorn</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
};

export default Footer;