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
        super();
        this.state = {
            // userRole: 'user',
            panel_on: '',
        }
        // this.hideAdmin = this.hideAdmin.bind(this);
    }
        // hideAdmin() {
        //     this.props.activeAdmin ? this.setState({panel_on: ''}) : 
        //     this.setState({panel_on: 'none'})}
            
    componentDidMount() {
        // this.hideAdmin(); not needed > used ternary operator in return
    }
    componentWillUnmount() {
        () => AbortController.abort(); //abort fetch to prevent uncontrolled comp error
    }
    render() {
    return (
        this.props.activeAdmin ?
        <div id='admin-panel' style={{display: this.state.panel_on}}>
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
        : <Login message='You will need to be admin to access this area. Please login with the proper credentials to see this page.'/> 
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



