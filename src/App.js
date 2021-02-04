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
        this.state = {data: JSON.parse(sessionStorage.getItem('data')) || 
            { expires: new Date('1977-08-01T15:44:55.498Z').toISOString(),
            loggedIn: false,
            role: null,
            admin: false
        }}
        this.timerDone = Date.parse(this.state.data.expires) - Date.parse(Date.now()) || -1;

        // sessionStorage.getItem('data') && (JSON.parse(sessionStorage.getItem('data')).expires > new Date().toISOString()) ? JSON.parse(sessionStorage.getItem('data')) : new Object({data: {
        //     expires: new Date('1977-08-01T15:44:55.498Z').toISOString(),
        //     loggedIn: false,
        //     role: null,
        //     admin: false
        // }})
            // loggedIn: false,
            // role: 'user', // get from DB
            // userID: null, // get from DB
            // expires: new Date().setMinutes(new Date().getMinutes()+60), // set to DB value at login > db call returns set time
            // admin: false
        this.userLogin = this.userLogin.bind(this);
        this.handleAccess = this.handleAccess.bind(this);
        this.loginPassUpState = this.loginPassUpState.bind(this);
        this.logoutTriggered = this.logoutTriggered.bind(this);
        
    }
    userLogin() {
        if(this.state.data.loggedIn === false) {
            return false
        } else {
            return true
        }
    }
    loginPassUpState(obj) { 
        console.log(obj, 'obj ... obj')
        const data = {
            userID: obj.id || null,
            role: obj.role,
            expires: obj.login_expiration,
            admin: obj.role === 'admin' ? true : false,
            firstName: obj.first_name,
            loggedIn: obj.id != null ? true : false
        }
        // console.log(obj)
        sessionStorage.setItem('data', JSON.stringify(data));
        this.setState(
            {data:
                JSON.parse(sessionStorage.getItem('data'))}
        );
        this.timerDone = Date.parse(this.state.data.expires) - Date.now();
        
        console.log(this.timerDone, Date.parse(this.state.data.expires) - Date.now(), 'timer done...')

        this.timerDone >=0 ? window.setTimeout(this.logoutTriggered, this.timerDone) : null;
        // console.log(this.state, 'state after session added', '.expires ???', (JSON.parse(sessionStorage.getItem('data')).expires))
    }
    handleAccess()  {
        // if(this.state.data.loggedIn && this.state.data.role === 'admin' && this.state.data.expires > new Date().toISOString()) {
        //     this.setState(prevState => ({
        //         data: {
        //             ...prevState.data,
        //         admin: 'dsfsdfdfdf',
        //         loggedIn: true,
        //         tester: false
        //     }}))
        // } else if(this.state.data.loggedIn && this.state.data.expires > new Date().toISOString()) {
        //     // later: convert func to server Login
        //     console.log(`Your user role on this site is ${this.state.data.role}. Please log in as an admin to see this page.`)
        // } else if(this.state.data.loggedIn !== true || JSON.parse(sessionStorage.getItem('data')).expire < new Date().toISOString()) {
        //     sessionStorage.removeItem('data')

        //     console.log('else triggered App.js ???? time issue');
        //     console.log('this state expires check', this.state.data.expires > new Date().toISOString(), this.state.data.expires, new Date().toISOString())
        // }
    }
    logoutTriggered() {
        sessionStorage.removeItem('data');
        this.setState({
            data: {
                expires: new Date('1977-08-01T15:44:55.498Z'),
                loggedIn: false,
                role: null,
                admin: false
            }}
        ) 
    }
    // shouldComponentUpdate() {
    //         JSON.parse(sessionStorage.getItem('data')).expires < new Date().toISOString() ? true : false
    //         // this.logoutTriggered() : this.setState(JSON.parse(sessionStorage.getItem('data')));
    // }
    componentDidMount() {
        console.log('this exp', this.timerDone)

        let {expires} = JSON.parse(sessionStorage.getItem('data')) || {expires: new Date('1977-08-01T15:44:55.498Z').toISOString()};
        this.timerDone = Date.parse(this.state.data.expires) - Date.now() || -1;
        
        this.timerDone >=0 ? window.setTimeout(this.logoutTriggered, this.timerDone) : null;
        
        sessionStorage.getItem('data') && expires > new Date().toISOString() ? this.setState(JSON.parse(sessionStorage.getItem('data'))) : this.logoutTriggered()    

        /* (sessionStorage.getItem('data') == null || undefined) || JSON.parse(sessionStorage.getItem('data')).expires < new Date().toISOString() ? this.logoutTriggered() : this.setState(JSON.parse(sessionStorage.getItem('data'))); */

        console.log(JSON.parse(sessionStorage.getItem('data')), 'status...')
        }

    render() {
        let adminCheck = `this.state.data.loggedIn === true && this.state.data.activeAdmin ? 
                <AdminPanel activeAdmin=
                {this.state.data.admin} role={this.state.data.role} loginPassUpState={this.loginPassUpState} loggedIn={this.state.data.loggedIn} expires={this.state.data.expires}/>
                : <Login message={'You will need to be admin to access this area. Please login with the proper credentials to see this page.'}/>`
            
        return (
            <Router>
            <Header loggedIn={this.state.data.loggedIn}/>
            <div id="page-wrapper">
            <Popup />
            <Switch>
                <Route path='/' exact><Blog loggedIn={this.state.data.loggedIn}/></Route>
                <Route path='/about'><About /></Route>
                <Route path='/projects'>
                    <Projects /></Route>
                <Route path='/terms'><Terms /></Route>
                <Route path='/login'>
                {this.state.data.loggedIn ? 'Already logged in.'
                : <Login role={this.state.data.role} loginPassUpState={this.loginPassUpState} logoutTriggered={this.logoutTriggered} loggedIn={this.state.data.loggedIn} message='Please Log In to Comment on Posts' expires={this.state.data.expires} />
                }
                </Route>
                {/* <Route path='/login'>{this.state.data.loggedIn === false ? () => <Login role={this.state.data.role != null ? this.state.data.role : null} loginPassUpState={this.loginPassUpState} loggedIn={this.state.data.loggedIn ? this.state.data.loggedIn : false}/> : 'Already logged in.'}</Route> */}
                <Route path='/admin-panel'>
                {this.state.data.admin ? 
                <AdminPanel activeAdmin=
                {this.state.data.admin} role={this.state.data.role} loginPassUpState={this.loginPassUpState} loggedIn={this.state.data.loggedIn} expires={this.state.data.expires}/>
                : <Login message={'You will need to be admin to access this area. Please login with the proper credentials to see this page.'} logoutTriggered={this.logoutTriggered} loginPassUpState={this.loginPassUpState} role={this.state.data.role} loggedIn={this.state.data.loggedIn} expires={this.state.data.expires} />}
                </Route>
                {/* <Route path='/admin-panel'><AdminPanel activeAdmin={this.state.data.admin} role={this.state.data.role || null} loginPassUpState={this.loginPassUpState} expires={this.state.data.expires}/></Route> */}
            </Switch> 
            </div>
                <Footer />
            </Router>
        )
    }
}

