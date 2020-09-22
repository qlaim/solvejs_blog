import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route, NavNavLink} from 'react-router-dom';
import {Header} from './components/Header';
import Footer from './components/Footer';
import {About} from './components/About';
import Blog from './containers/Blog';
import Popup from './containers/Popup';
import Projects from './components/Projects';
import Terms from './components/Terms';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        }
    }
    render() {
        return (
            <Router>
            <Header />
            <div className="page-wrapper">
                <Popup />
                <Switch>
                <Route path='/' exact><Blog loggedIn={this.state.loggedIn}/></Route>
                <Route path='/about'><About /></Route>
                <Route path='/projects'><Projects /></Route>
                <Route path='/terms'><Terms /></Route>
                </Switch>
                <Footer />
            </div>
            </Router>
        )
    }
}

