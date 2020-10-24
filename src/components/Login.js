import React, { useState } from 'react';

export default function Login(props) {
    const [emailActive, setActive] = useState(false);
    const [userEmail, setEmail] = useState('');
    let buttonText='test';
    const changeState = () => {
        setActive(!emailActive);
        emailActive ? buttonText = 'Register' : buttonText = 'Login';
    }

    return (
        <div>
        <p>{props.message}</p>
        {emailActive ? <LoginForm user={userEmail} buttonText='Register' changeState={changeState}/> : <RegForm user={userEmail} buttonText='Login' changeState={changeState} /> /* move reg to comments, etc */}
        </div>
    )
}
const tryLogin = (e) => { // does not hit api router
    fetch(`http://localhost:3030/api/login/${e.target.querySelector('input[type="email"]').value}/${e.target.querySelector('input[type="password"]').value}`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json, text/plain',
            'Accept': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}
function LoginForm(props) {
    return (
        <div id='login-div'>
        <p>Please Log In to Comment on Posts<button onClick={props.changeState}>{props.buttonText}</button></p>
        <form id='login-form' action='/admin-panel' onSubmit={(e) => tryLogin(e)}>
        <label htmlFor='email'>Email</label><input type='email' name='email' placeholder='login email address' required />
        <label htmlFor='password'>Password</label><input type='password' placeholder='password' required />
        <button type='submit'>Submit</button>

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