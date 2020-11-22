import React, { Component, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            userHasLogin: false,
            // formVisibility: true,
            userEmail: '',
            role: null
        }
        this.tryLogin = this.tryLogin.bind(this);
        this.logoutPrep = this.logoutPrep.bind(this);
        this.removeListener = this.removeListener.bind(this);
        this.setLogOutState = this.setLogOutState.bind(this);
    }
    changeState = () => {
        this.state.userHasLogin ? buttonText = 'Register' : buttonText = 'Login';
    }
    tryLogin(e, func) {
        const badRequest = {
            data: {
                login_expiration: new Date('August 1, 1977 23:00:00').toISOString(),
                loggedIn: false,
                role: null,
                admin: false,
                first_name: 'na',
                id: null
            }}
        fetch(`http://localhost:3030/api/login/${e.target.parentNode.querySelector('input[type="email"]').value}/${e.target.parentNode.querySelector('input[type="password"]').value}`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(result => result.json())
        .then(data => {
            console.log(data.result, 'result data');
            data.result === false 
            ? func(badRequest)
            : func(data)
        })
        .then(() => this.logoutPrep())
        .catch(err => err)
    }
    setLogOutState = () => {
        console.log('eventlistener added');
        window.sessionStorage.removeItem('data');
        this.removeListener();
        this.props.logoutTriggered();
        console.log('triggered', this.props.logoutTriggered)
    }
    removeListener() {
        // listener stops working but not removed from element
        document.querySelector('#logInOut').removeEventListener('click', this.setLogOutState);
        console.log('removed...')
    }
    logoutPrep() {
        // send to db
        // set state
        // set sessionStorage
        document.querySelector('#logInOut').addEventListener('click', this.setLogOutState);
        //.hasAttribute('#text["Logout"]')
    };
    componentDidMount() {
        () => this.setState({
            loggedIn: this.props.loggedIn,
            role: this.props.role,
            role: this.props.role
        })
    }
    render() {
        let buttonText='';
        let dataSwitch = <Switch>
        <Route>
        <LoginForm message={this.props.message} logoutTriggered={this.props.logoutTriggered} user={this.state.userEmail} buttonText='Register' changeState={this.changeState} loginPassUpState={this.props.loginPassUpState} tryLogin={this.tryLogin}/> 
        </Route>
        <Route>
        <RegForm user={this.state.userEmail} buttonText='Login' changeState={this.changeState} /> /* move reg to comments, etc */
        </Route>
    </Switch>
        return this.state.loggedIn 
        !== true ?
            dataSwitch :
            null
    }
}
function LoginForm(props) { // test user: ted@yahoo.com pass: P@ZSZWIRD3
    return (
        <div id='login-div' onChange={console.log('changed...')}>
        <p>{props.message}<button onClick={props.changeState}>{props.buttonText}</button></p>
        <form id='login-form' /* action='./'  */>
        <label htmlFor='email'>Email</label><input type='email' name='email' placeholder='login email address' required />
        <label htmlFor='password'>Password</label><input type='password' placeholder='password' required />
        <button type='button' onClick={(e) => props.tryLogin(e, props.loginPassUpState, props.logoutTriggered)}>Submit</button>
        </form>
        </div>
    )
}
function RegForm(props) {
    return (
        <div id='login-div'>
        <p>Email Registration<button onClick={props.changeState}>{props.buttonText}</button></p>
        <form id='login-form' action={window.location}>
        <label htmlFor='first-name'>First Name</label><input type='text' placeholder='first name - not required' />
        <label htmlFor='job-title'>Job Title</label><input type='text' placeholder='job title - not required' />
        <label htmlFor='email'>Email</label><input type='email' name='email' placeholder='login email address' required />
        <label htmlFor='password'>Enter Password</label><input type='password' placeholder='password' required />
        <label htmlFor='re-password'>Re-enter Password</label><input type='password' placeholder='password' required />
        <button type='submit'>Submit</button>

        </form>
        </div>
    )
}