import React, { Component } from 'react';

import Register from '../register/Register';
import './Landing.scss';

class Landing extends Component {

    render() {
        return (
            <div>
                <div id="banner-landing">
                    <Register />
                </div>
                <div class="row">
                    <div class="container">
                        <div class="col s12">
                            <h1 class="center-align">Welcome To TaskIt</h1>
                            <p>This task management solution is great for teams trying to streamline their tasks and work concurrently
          without any hassles. Here are some reasons why we love taskit and made it just for you!</p>
                        </div>
                    </div>
                </div>
                <div id="banner-landing-two" class="row">
                    <div class="container center-align s12">
                        <h2 class="grey-text text-lighten-5">Why Choose Taskit?</h2>
                    </div>
                </div>
                <div class="row container">
                    <div class="col s4 center-align">
                        <i class="medium material-icons">dashboard</i>
                        <h3>One Place</h3>
                    </div>
                    <div class="col s4 center-align">
                        <i class="medium material-icons">attach_money</i>
                        <h3>Free</h3>
                    </div>
                    <div class="col s4 center-align">
                        <i class="medium material-icons">check_box</i>
                        <h3>In Sync</h3>
                    </div>
                    <div lass="container col s12">
                        <div class="col s4">
                            <p>Everything is easily in one place so you can view your overall project goals and view your tasks directly to
          get the job done.</p>
                        </div>
                        <div class="col s4">
                            <p>We wanted small teams to really benefit from our service. Our passion is building projects in our spare
          time, small teams come with big dreams.</p>
                        </div>
                        <div class="col s4">
                            <p>Your team will be in sync with tasks,deadlines, even issues. This makes big project easier.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Landing;