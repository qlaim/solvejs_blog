import React, { Component, Fragment, useState } from 'react';
import hocPost from './hocPost';

export default class PostsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false, // use to prevent render from database
            // need if statement at Blog
            // need false in db, also
            // will also need to move all code to individual posts
            posts: [],
            tmpParagraphs: ['**sessionStorage FOR TEMP IN CASE OF REFRESH', '**BUTTON: SEND TO DATABASE', '**EDIT BUTTON THAT UPDATES STATE INDEX ON SEND'],
            paragraphs: ['**sessionStorage FOR TEMP IN CASE OF REFRESH', '**BUTTON: SEND TO DATABASE', '**EDIT BUTTON THAT UPDATES STATE INDEX ON SEND'],
            tmpCode: [],
            code: [],
            images: []
        }
        this.pullPostTitles = this.pullPostTitles.bind(this);
        this.createCode = this.createCode.bind(this);
        this.createImage = this.createImage.bind(this);
        this.createPara = this.createPara.bind(this);
        this.editParagraph = this.editParagraph.bind(this);
        this.handleChangeParagraph = this.handleChangeParagraph.bind(this);
        this.handleValChange = this.handleValChange.bind(this);
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
        {/* <TextBlock handleChangeParagraph={handleChangeParagraph}/> */} 
    }
    editParagraph(e, num) {
        let eHold = e.target.parentNode.querySelector(name='textarea').innerHTML;
        let tmpArr = [...this.state.paragraphs];
        tmpArr.splice(num, 1, this.state.tmpParagraphs[num]);
        this.setState({
             paragraphs: tmpArr
        });
        console.log('should have updated state...')
    }
    handleValChange = (e, num) => {
        // generic function for all onchange
    }
    handleChangeParagraph = (e) => {
        let eHolder = new String(e.target.value);
        let textVal = e.target.parentNode.querySelector('textarea').value;
        let buttonNumValue = e.target.parentNode.querySelector('button').lastChild.textContent;
        let tmpArr = [...this.state.tmpParagraphs];
        tmpArr[buttonNumValue] = 'default' // give value to prevent fill of prev elements if they are empty
        tmpArr.splice(buttonNumValue, 1, textVal)
        this.setState(prevState =>({
            tmpParagraphs: tmpArr // set state after splice tmpArr
        }))
    }
    createCode() {
        return <CodeBlock />

    }
    createImage() {
        return <Images />
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
            <div key='lkj' className='panel-header'>Posts Panel</div>
            <div className='written-posts'>
            {this.state.posts ? this.state.posts.map(item =>
                <div key={item.post_id + 1}>
                <div key={item.post_id}>
                <span key={item.post_id}>{item.title}</span>
                <span key='tttt'>{item.post_created}</span>
                <button>Edit Post</button>
                </div>
                </div>
            ) : null}
            </div>
            <EditPostInState allState={this.state} editParagraph={this.editParagraph} handleChangeParagraph={this.handleChangeParagraph}/>
            <CreatePostBlock createPara={this.createPara} createCode={this.createCode} createImage={this.createImage} handleChangeParagraph={this.handleChangeParagraph} handleValChange={this.handleValChange}/>
            <SendToDB sendState={this.sendState}/>
            </Fragment>
            /* list of posts */
        )
    }
}
const Holder = hocPost(TextBlock);

function EditPostInState(props) {
        return <div className='edit-new-post'>
        {props.allState.paragraphs ? 
        props.allState.paragraphs.map((item, index) => <div key={index} className='one-post-admin'><textarea rows='auto' cols='100' defaultValue={item} onChange={(e) =>props.handleChangeParagraph(e)}></textarea><button type='button' onClick={(e) => props.editParagraph(e, index)}>Replace Paragraph @ Index: {index}</button></div>) : []}
        </div> 
    }
function CreatePostBlock(props) {
    return (
        <div className='add-post-group'>
        {}
        <form action=''>
        <label htmlFor='title'>CreatePostBlock CreatePostBlock</label>
        <input type='button' value="placeholder-CreatePostBlock" />
        </form>
        <TextBlock createPara={props.createPara} handleValChange={props.handleValChange}/>
        </div>
    )
}
function TextBlock(props) {
    return (
        <div className='post-create'>
        <form action='' name='text-block' onChange={props.handleChangeParagraph}>
        <label htmlFor='paragraph'>Enter Paragraph</label><textarea cols='100%' rows='auto' name='paragraph'></textarea>
        <input type='button' onClick={(e) => props.createPara(e)} value='Send: State & sessionStorage' />
        </form>
        <Images />
        <CodeBlock handleValChange={props.handleValChange}/>
        </div>
    )
}

function Images(props) {
    return (
        <div className='image-block'>Images Images</div>
    )
}

function CodeBlock(props) {
    return <div className='code-block'>
    <form onChange={props.handleValChange} onSubmit={props.handleValChange}>
    <textarea defaultValue='CodeBlock CodeBlock'></textarea>
    <button type='button'>Code To State</button>
    </form>
    </div>
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