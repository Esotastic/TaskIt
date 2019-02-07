import React, { Component } from 'react';

import Register from '../register/Register';
import './Landing.scss';

class Landing extends Component {

    render() {
        return (
            <div>
                <div id="banner-landing">
                    <h1 className="center-align grey-text text-lighten-5">Taskit</h1>
                    <p className="center-align grey-text text-lighten-5 subheader">Get Projects Done</p>
                </div>
                <div className="row">
                    <div className="container">
                        <div className="col s12">
                            <h1 className="center-align">Welcome To TaskIt</h1>
                            <p>This task management solution is great for teams trying to streamline their tasks and work concurrently
          without any hassles. Here are some reasons why we love taskit and made it just for you!</p>
                        </div>
                    </div>
                </div>
                <div id="banner-landing-two" className="row">
                    <div className="container center-align s12">
                        <h2 className="grey-text text-lighten-5">Why Choose Taskit?</h2>
                    </div>
                </div>
                <div className="row container">
                    <div className="col s4 center-align">
                        <i className="medium material-icons">dashboard</i>
                        <h3>One Place</h3>
                    </div>
                    <div className="col s4 center-align">
                        <i className="medium material-icons">attach_money</i>
                        <h3>Free</h3>
                    </div>
                    <div className="col s4 center-align">
                        <i className="medium material-icons">check_box</i>
                        <h3>In Sync</h3>
                    </div>
                    <div lass="container col s12">
                        <div className="col s4">
                            <p>Everything is easily in one place so you can view your overall project goals and view your tasks directly to
          get the job done.</p>
                        </div>
                        <div className="col s4">
                            <p>We wanted small teams to really benefit from our service. Our passion is building projects in our spare
          time, small teams come with big dreams.</p>
                        </div>
                        <div className="col s4">
                            <p>Your team will be in sync with tasks,deadlines, even issues. This makes big project easier.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default Landing;