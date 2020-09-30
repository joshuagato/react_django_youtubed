import React, { Component } from 'react';
import './Homepage.scss';

import { Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';
import ListVideos from './ListVideos/ListVideos';
import WatchVideos from './WatchVideos/WatchVideos';

class Homepage extends Component {

    state = {
        shown: false
    }

    menuHandler = () => {
        this.setState((prevState => {
            return { shown: !prevState.shown };
        }));
    }

    render() {
        return (
            <div className="homepage">
                <section className="header-section">
                    <Header showhide={this.menuHandler} />
                </section>

                <section className="main-content-and-nav-div">
                    {this.state.shown ? <section className="side-nav">
                        <SideNav />
                    </section> : ''}

                    <section className="main-content">
                        <Switch>
                            <Route path='/' exact component={ListVideos} />
                            <Route path='/watch-videos' exact component={WatchVideos} />
                        </Switch>
                    </section>
                </section>
            </div>
        );
    }
}

export default Homepage;
