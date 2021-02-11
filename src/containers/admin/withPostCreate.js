import React, { Component } from 'react';
import {hocElement} from '../../components/EditCodePrompt';

export default function withPostCreate(WrappedComponent) {
    return class WithPostCreate extends Component {
        constructor(props) {
            super(props);
            this.state = {
                wipPosts: ['test wipPosts @ WithPostCreate'],
            }
            this.createCode = this.createCode.bind(this);
        }
        createCode() {
            return <CodeBlock />
        }
        render() {
            return <>
            <WrappedComponent />
            <CodeBlock />
            </> 
            }
        }
    }

    class CodeBlock extends Component {
        constructor(props) {
            super(props)
        }
        render() { // not currently rendering
        return <div id='new-post' className='code-block'>
        <button type='button' onClick={() => hocElement('li')}>li</button>
        <button type='button' onClick={() => hocElement('p')}>p</button>
        </div>
        }
    }