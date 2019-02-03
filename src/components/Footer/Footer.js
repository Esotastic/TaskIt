import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {

    render() {
        return (
            <div>
                <footer class="page-footer  light-blue darken-4">
                    <div class="footer-copyright light-blue darken-4">
                        <div class="container center-align">
                            <p class="grey-text text-lighten-4">TaskIt ©2019</p>
                            <a class="grey-text text-lighten-4" href="https://github.com/projectunic0rn" target="_blank">Project Unicorn</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
};

export default Footer;