import React, { Component } from 'react';
import { relative } from 'path';
import inputcheck from '../utility/inputcheck';

export default class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true,
            inputEmailClass: 'input-check-fail',
            inputNameClass: 'input-check-fail'
        }
        this.handleClick = this.handleClick.bind(this);
        this.checkInputEmail = this.checkInputEmail.bind(this);
        this.checkInputName = this.checkInputName.bind(this);
        this.handlePassEmail = this.handlePassEmail.bind(this);
        this.handlePassName = this.handlePassName.bind(this);
    }
    handleClick() {
        this.setState({
            display: false
        })
    }
    checkInputEmail() {
        inputcheck.emailCheck(document.getElementById('email').value) ?
        this.handlePassEmail(true) : this.handlePassEmail(false) 
        // does not recheck if changed after pass
    }
    checkInputName() {
        inputcheck.nameCheck(document.getElementById('name').value) ?
        this.handlePassName(true) : this.handlePassName(false) 
        // does not recheck if changed after pass
    }
    handlePassEmail(status) {
        status ? this.setState({
            inputEmailClass: 'input-check-pass'
    }) : this.setState({
        inputEmailClass: 'input-check-fail'
})
}
    handlePassName(status) {
        status ? this.setState({
            inputNameClass: 'input-check-pass'
    }) : this.setState({
        inputNameClass: 'input-check-fail'
})
    }
    render() {
        return <div className='popup' style={{zIndex: '100', position: 'fixed', top: '15vh', left: '25%', width: '500px', height: '500px', textAlign: 'center', color: 'white', backgroundColor: 'rgb(0, 181, 255)', backgroundImage: 'url("../../public/images/door_puzzle.webp")', display: this.state.display ? 'block' : 'none'}}>
        <ClosePopup click={this.handleClick} />
        <span style={{lineHeight: '500px'}}>
        Get updates on future JavaScript-related posts sent to you</span>
        <PopupForm classNameInput={this.state.inputNameClass} classEmailInput={this.state.inputEmailClass} inputEmailRegex={this.checkInputEmail} inputNameRegex={this.checkInputName}/>
        </div>
    }
}
function PopupForm(props) {
    return (
        <form action='/' id='newsletter-form' style={{position: 'relative', bottom: '30%'}}>
            <input className={props.classEmailInput} type='text' placeholder='email address' id='email' name='email' onInput={props.inputEmailRegex} /><label htmlFor='email'>Email Address</label>
            <input className={props.classNameInput} type='name' placeholder='first name' id='name' name='name' onInput={props.inputNameRegex} /><label htmlFor='name'>First Name</label>
            <input type='submit' value='submit' />
        </form>
    )
}
function ClosePopup(props) {
    return (
        <div style={{fontSize: '2em', fontWeight: 'bold', color: 'white', position: 'absolute', top: 0, right: 0, border: '1px solid white'}} onClick={props.click} onMouseOver={() => 'Close'}>X</div>
    )
}