import React, { Component } from 'react';
import {BrowserRouter as Router, NavLink, Switch, Route, NavNavLink} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {Header} from './components/Header';
import Login from './components/Login';
import Footer from './components/Footer';
import {About} from './components/About';
import Blog from './containers/Blog';
import Popup from './containers/Popup';
import Projects from './components/Projects';
import Terms from './components/Terms';
import AdminPanel from './containers/admin/AdminPanel';

const history = createBrowserHistory();

/* MOVE ALL FETCH URLS TO CONFIG FILE OR SIMILAR FOR PROD / DEV */
/* MOVE ALL FETCH URLS TO CONFIG FILE OR SIMILAR FOR PROD / DEV */

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true,
            role: 'user', // get from DB
            userID: null, // get from DB
            expires: new Date().setMinutes(new Date().getMinutes()+60), // set to DB value at login
            admin: false
        }
        this.userLogin = this.userLogin.bind(this);
        this.handleAccess = this.handleAccess.bind(this);
    }
    userLogin() {
        if(this.state.loggedIn === false) {
            return false
        } else {
            return true
        }
    }
    handleAccess()  {
        if(this.state.loggedIn && this.state.role === 'admin' && this.state.expires > Date.now()) {
            this.setState({
                admin: true
            })
        } else if(this.state.loggedIn && this.state.expires > Date.now()) {
            return `Your user role on this site is ${this.state.role}. Please log in as an admin to see this page.`
        } else {

            this.setState({
                admin: false,
                loggedIn: false,

            })
            return false
        }
    }
    componentDidMount() {
        this.handleAccess();
    }
    render() {
        console.log(this.state.expires >= Date.now(), 'true or false', this.state.expires)
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
        <Route path='/login'>{!this.state.loggedIn ? <Login /> : 'Already logged in.'}</Route>
                <Route path='/admin-panel'><AdminPanel activeAdmin={this.state.admin}/></Route>
                </Switch>
                <Footer />
            </div>
            </Router>
        )
    }
}

