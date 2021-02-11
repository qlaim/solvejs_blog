import React, { Component, Fragment, useState } from 'react';
import CreateNewPost from './Posts/CreateNewPost';
import EditSinglePost, {EditSinglePostFullSize} from '../../components/EditSinglePost';
import {hocElement} from '../../components/EditCodePrompt';
import { render } from 'react-dom';

export default class PostsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLivePosts: false,
            ready: false, // use to prevent render from database
            // need if statement at Blog
            // need false in db, also
            // will also need to move all code to individual posts
            posts: [],
            activePost: -1,
            tmpParagraphs: ['**sessionStorage FOR TEMP IN CASE OF REFRESH', '**BUTTON: SEND TO DATABASE', '**EDIT BUTTON THAT UPDATES STATE INDEX ON SEND'],
            paragraphs: ['**sessionStorage FOR TEMP IN CASE OF REFRESH', '**BUTTON: SEND TO DATABASE', '**EDIT BUTTON THAT UPDATES STATE INDEX ON SEND'],
            tmpCode: [],
            code: [],
            images: []
        }
        this.pullPostTitles = this.pullPostTitles.bind(this);
        this.createImage = this.createImage.bind(this);
        this.createPara = this.createPara.bind(this);
        this.editParagraph = this.editParagraph.bind(this);
        this.handleChangeParagraph = this.handleChangeParagraph.bind(this);
        this.handleValChange = this.handleValChange.bind(this);
        // this.toggleShowLivePosts = this.toggleShowLivePosts.bind(this);
    }
    toggleShowLivePosts = () => {
        this.setState(prevState => ({
            showLivePosts: !prevState.showLivePosts
        }))
    }
    pullPostTitles() {
        fetch('http://localhost:3030/api/posts')
        .then(results => results.json())
        .then(data => this.setState({posts: data}))
    }
    componentDidMount() {
        this.pullPostTitles();
    }
    
    createPara(e) {
        e.persist();
        e.preventDefault();
        // console.log(e.currentTarget.parentNode.children[1].value)
        this.setState(prevState =>({
            paragraphs: prevState.paragraphs.concat(e.target.parentNode.children[1].value)
        }));
    }
    editParagraph(e, num) {
        // e.target.parentNode.parentNode.classList.toggle('single-post-max-size');
        console.log(e.target.innerText, e.target);
        if(e.target.innerText === 'Edit') {
            this.setState({
                activePost: num
            });
            console.log(e.target.innerText);
            e.target.innerText = 'Cancel';
            console.log(e.target.innerText);
        } else if(e.target.innerText === 'Cancel') {
            this.setState({
                activePost: 0
            });
            console.log(e.target.innerText);
            e.target.innerText = 'Edit';
            console.log(e.target.innerText);
        }
    }
    submitChange = (passed) => {
        console.log(`changes should be submitted here for item ${passed}`);

        // move changes to state >>> send to db if differences
        // use intermediary state before committing

        // pass in state item after updated

        // check if any changes per state item

        // pass changes to db

        // update state
    } 
    handleValChange = (e, num) => {
        // generic function for all onchange
    }
    handleChangeParagraph = (e) => {
        let eHolder = new String(e.target.value);
        let textVal = e.target.parentNode.querySelector('textarea').value;
        let buttonNumValue = e.target.parentNode.querySelector('button').lastChild.innerText;
        let tmpArr = [...this.state.tmpParagraphs];
        tmpArr[buttonNumValue] = 'default' // give value to prevent fill of prev elements if they are empty
        tmpArr.splice(buttonNumValue, 1, textVal)
        this.setState(prevState =>({
            tmpParagraphs: tmpArr // set state after splice tmpArr
        }))
    }
    
    createImage() {
        return (
            <>
        <Images />
        'CreateImages'
            </>
        )
    }
    sendState = () => {
        console.log('this will send state to database to be pulled to state in APP')
    }
    render() {
        // goal: generate html per blog post > refactor there
        // create a post per hoc ??
        
        return (
            /* list of posts */
            <Fragment>
            <div key='posts-panel-key' className='panel-header'>Posts Panel</div>
            <div className='live-posts'>
                <button onClick={this.toggleShowLivePosts} value={this.state.showLivePosts ? 'Hide Live Posts' : 'Show Live Posts'}>uuu</button>
                <div className='div-posts-edit-flex-inner' style={{display: this.state.showLivePosts ? 'block': 'none'}}>
                    {this.state.posts ? this.state.posts.map(item => {
                        return item.post_id === this.state.activePost ? <div key={item.post_id} className='single-post-full'>
                            <EditSinglePostFullSize key={item.post_id} item={item} editParagraph={(e) => this.editParagraph(e, item.post_id)} submit={() => this.submitChange(item)} /></div> : <EditSinglePost key={item.post_id} item={item} editParagraph={(e) => this.editParagraph(e, item.post_id)} />
                    }) : null}
                {/* this.state.posts ? this.state.posts.map(item =>
                    <div key={item.post_id} id={item.post_id} className='single-post'>
                    <div key={item.post_id}>
                    <span key={item.post_id}>{item.title}</span>
                    <span key='tttt'>{item.post_created}</span>
                    <button onClick={(e) => this.editParagraph(e)}>Edit Post</button>
                    <button onClick={() => console.log('delete clicked')} className='warning'>Delete Post</button>
                    </div>
                    </div>
                ) : null */}
                </div>
            </div>
            <CreateNewPost test={this.state.tmpParagraphs}/>
            <SendToDB sendState={this.sendState}/>
            </Fragment>
            /* list of posts */
        )
    }
}

function Images(props) {
    return (
        <div className='image-block'>Images Images</div>
    )
}




function GenerateChild(props) {
    return 'GenerateChild GenerateChild'
}
function SendToDB(props) {
    return (
        <button type='button' id='send-edit-state' onClick={props.sendState}>SEND TO DABATASE!!</button>
    )
}
export {PostsPanel};