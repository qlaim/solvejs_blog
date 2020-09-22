import React, { Component } from 'react';
import Card from './BlogPostRender';
import Projects from '../components/Projects';
import {posts} from '../db/posts';

export default class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCardDivID: -1, // -1 to select none of posts for full initially
        }
        this.handleClick = this.handleClick.bind(this);
    }
handleClick(event) {
    this.setState({
        activeCardDivID: event.target.parentElement.parentElement.id
    });
    console.log(event.target.parentElement.parentElement.id, 'id id id id id id', this.state.activeCardDivID, 'state state state ')
    }
    render() {
        let tech = ['JavaScript', 'ReactJS', 'React Router', 'Express', 'Git - version control', 'Webpack [Development]', 'Nodemon [Development]']
        return (/* need key for list - move to array */
            <div id="content-wrapper">
                <div id='card-posts' key={1}>
                    <h1>**blog componenent will show as cards until clicked; others will remain as cards and reposition &gt;&gt; challenge may be if user selects post in the middle; on click, card will open to post &gt;&gt; 'collapse post'
                    </h1>
                        {posts.map((item, index) =>
                            <Card click={this.handleClick} key={index} id={index} activeCard={this.state.activeCardDivID} title={item.title} image={item.image} text={item.text} writer='James C Hardy, JavaScript | ReactJS | Express | PostgreSQL Web Developer' /> 
                        )}
                </div>
            </div>
        )
    }
}