import React, { Component, useState } from 'react';
import {Switch, Route, Link} from 'react-router-dom';
import {EmailsPanel} from './EmailsPanel';
import ImagesPanel from './ImagesPanel';
import {PostsPanel} from './PostsPanel';
import {UsersPanel} from './UsersPanel';
import Login from '../../components/Login';


// add checks for admin using connection to psql
// add edit for posts / users / image upload via node fs 

export default class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // activeAdmin: false,
            // role: null,
            // expires: null
        }
        // this.hideAdmin = this.hideAdmin.bind(this);
    }
        // hideAdmin() {
        //     this.props.activeAdmin ? this.setState({panel_on: ''}) : 
        //     this.setState({panel_on: 'none'})}
            
    // componentDidUpdate() {
    //     this.setState({
    //         activeAdmin: this.props.activeAdmin,
    //         role: this.props.role
    //     })
    //     // this.hideAdmin(); not needed > used ternary operator in return
    // }
    componentWillUnmount() {
        () => AbortController.abort(); //abort fetch to prevent uncontrolled comp error
    }
    componentDidMount() {
        this.setState({
            activeAdmin: this.props.activeAdmin,
            role: this.props.role,
            expires: this.props.expires,
            loggedIn: this.props.loggedIn
        })
    }
    // handleAccess()  {
    //     // window.sessionStorage.removeItem('data');
    //     if(this.state.activeAdmin && this.state.role === 'admin' && this.state.expires > new Date().toISOString()) {
    //         () => this.setState({
    //             activeAdmin: this.props.activeAdmin,
    //             loggedIn: this.props.loggedIn,
    //             role: this.props.role
    //         })
    //     } else if(this.state.loggedIn && this.state.expires > new Date().toISOString()) {
    //         // later: convert func to server Login
    //         return `Your user role on this site is ${this.state.role}. Please log in as an admin to see this page.`
    //     } else {
    //     }
    // }
    render() {
    return (
        /* this.state.activeAdmin && this.state.expires > new Date().toISOString() ? */
        <div id='admin-panel'>
        <AdminMenu />
        <Switch> 
        {/* renamed to comp for error should not use <Route component> and <Route children> in the same router */}
        <Route path={'/admin-panel/posts'} comp={PostsPanel}>
        <PostsPanel />
        </Route>
        <Route path={'/admin-panel/users'} comp={UsersPanel}>
        <UsersPanel />
        </Route>
        <Route path={'/admin-panel/images'} comp={ImagesPanel}>
        <ImagesPanel />
        </Route>
        <Route path={'/admin-panel/emails'} comp={EmailsPanel}>
        <EmailsPanel />
        </Route>
        )
        </Switch>
        </div>
        /* : <Login message='You will need to be admin to access this area. Please login with the proper credentials to see this page.' loginPassUpState={this.props.loginPassUpState} /> */ 
        /* ADD CHECK FOR USERS LOGGED IN TERNARY HERE FOR REG VS LOGIN */
      
        )}
    }
//     render() {
//         
/* REVISIT MAP FUNCTION; PROBLEM: <item.name /> 
    ***add memoization for db pulls
*/
//         const panels = [
//             {name: 'UsersPanel', opens: 'users'
//             },{name: 'ImagesPanel', opens: 'images'},
//             {name: 'EmailsPanel', opens: 'emails'
//             },{name: 'PostsPanel', opens: 'posts'
//             },
//         ];
//         return (
//             <div id='admin-panel'>
//                 <AdminMenu />
//             <Switch>
//             {panels.map((item, index) => 
//                 <Route key={index} path={'/admin-panel/'+ item.opens} component={item.name}>
//                 <item.name />
//                 </Route>
//             )}
//             </Switch>
//             </div>
//         )
//     }
// }
function AdminMenu() {
    const buttonArray = [{
        text: 'Edit Users',
        opens: 'users'
    }, {
        text: 'Edit Images',
        opens: 'images'
    }, {
        text: 'Edit Posts',
        opens: 'posts'
    }, {
        text: 'Edit Emails',
        opens: 'emails'
    }]
    return (
        <div id='admin-menu'>
        <div id='admin-menu-items'>
        {buttonArray.map((item, index) => <button key={index} ><Link to={'/admin-panel/'+ item.opens}>{item.text}
        </Link></button>)}
        </div>
        </div>
    )
}



