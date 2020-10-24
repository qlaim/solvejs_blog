import React, { Component } from 'react';

export default class UsersPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
        this.loadUsers = this.loadUsers.bind(this);
        this.editUser = this.editUser.bind(this);
    }
    loadUsers() {
        fetch('http://localhost:3030/api/users')
        .then(result => result.json())
        .then(data => this.setState({
            users: data
        }))
    }
    editUser() {
        // open user
        // lower priority to posts panel >> revisit after
        // fetch('http://localhost:3030/api/users/')
    }
    componentDidMount() {
        this.loadUsers();
    }
    render() {
        return (
            /* list of users */
    
            <div>
                <h1>Users Panel</h1>
                {this.state.users.map(item => 
                    <div key={item.id}>{
                        <div>
                        <button key={item.id} className='edit-user-button' onClick={this.editUser}>{`${item.first_name} ${item.last_name}, ${item.job_title.toUpperCase()}`}</button>
                        <span>{item.email}</span>
                        <h2>Reading history</h2>
                        {item.reading_history ? item.reading_history.map((hist, index) => <li key={index}>{hist}</li>) : 'There is no current reading history'}
                        </div>
                    
                }
                </div>)}
            </div>
        )
    }
}

export {UsersPanel};