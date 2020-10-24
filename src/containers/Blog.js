import React, { Component } from 'react';
import Card from './BlogPostRender';
import Projects from '../components/Projects';
import {postsFromFetchFile, postsFromFetchFile2} from '../db/posts';
import path from 'path'
import dbPostsObj from './blogPostsFromDb';
import {fetchPosts} from './blogPostsFromDb';   

export default class Blog extends Component {
    constructor(props) {
        super();
        this.state = {
            activeCardDivID: -1, // -1 to select none of posts for full initially
            postsDb: [{title: 'Loading...1', images: null, categories: '', post_id: Math.random()*1.3*Math.random(), paragraphs: 'Loading...1'}, {title: 'Loading...2', images: null, categories: '', post_id: Math.random()*1.3*Math.random(), paragraphs: 'Loading...2'}]
        } // add conditional here to not load dummy content
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event) {
    this.setState({
        activeCardDivID: event.target.parentElement.parentElement.id
    });
    console.log(event.target.parentElement.parentElement.id, 'id id id id id id', this.state.activeCardDivID, 'state state state ')
    }
    componentDidMount() {
        fetch('http://localhost:3030/api/posts', {
            method: 'GET',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(result => result.json()
        .then(data => this.setState({postsDb: data})));
    }
    componentDidUpdate() {
    }   
    render() {
        let tech = ['JavaScript', 'ReactJS', 'React Router', 'Express', 'Git - version control', 'Webpack [Development]', 'Nodemon [Development]'];
        let imgList;    
            
        return (/* need key for list - move to array */
            <div id="content-wrapper">
                <div id='card-posts' key={1}>
                    <h1>**blog componenent will show as cards until clicked; others will remain as cards and reposition &gt;&gt; challenge may be if user selects post in the middle; on click, card will open to post &gt;&gt; 'collapse post'
                    </h1>
                    {this.state.postsDb.map((item, index) =>
                        <Card click={this.handleClick} key={item.post_id} id={item.post_id} activeCard={this.state.activeCardDivID} title={item.title} image={item.images} text={item.paragraphs} writer='James C Hardy, JavaScript | ReactJS | Express | PostgreSQL Web Developer' />
                    )}
                        {/* posts.map((item, index) =>
                            <Card click={this.handleClick} key={index} id={index} activeCard={this.state.activeCardDivID} title={item.title} image={item.image} text={item.text} writer='James C Hardy, JavaScript | ReactJS | Express | PostgreSQL Web Developer' />
                        ) */}
                </div>
            </div>
        )
    }
}