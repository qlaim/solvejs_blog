import React from 'react';
import withPostCreate from '../withPostCreate';

function CreateNewPost(props) { /* replace in favor of another */
    return <div className='edit-new-post'>
    <div key={'ttt'} className='one-post-admin'>
        <div contentEditable>
            {props.test}
        </div>
    <button type='button' onClick={() => 'should be returning <CreatePostBlock />'}>Add Paragraph</button></div>
    <CreatePostBlock /* createPara={this.createPara} createCode={this.createCode} createImage={this.createImage} handleChangeParagraph={this.handleChangeParagraph} handleValChange={this.handleValChange} *//>
    </div> 
}
function CreatePostBlock(props) {
    return ( /* remove this in favor of other */
        <div className='add-post-group' contentEditable suppressContentEditableWarning>
            <p>paragraph
                <code>
                    let test = document.querySelectorAll('p');
                    console.log(test);
                </code>
                <li>test</li>
            </p>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
                <h1>PROPS</h1>
            <p>
                {props.test2}
            </p>
        </div>
    )
}
export default withPostCreate(CreateNewPost);