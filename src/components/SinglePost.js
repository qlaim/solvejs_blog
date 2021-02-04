import React, { useState } from 'react';

export default function SinglePost(props) {
    return (
        <div key={props.item.post_id} id={props.item.post_id} className='single-post'>
            <div key={props.item.post_id}>
                <div key={props.item.post_id}>{props.item.title}</div>
                <span key='tttt'>{props.item.post_created}</span>
                <div>
                <button className='edit-button' onClick={(e) => props.editParagraph(e, props.item.post_id)}>Edit</button>
                </div>
            </div>
        </div>
    )
}

function SinglePostFullSize(props) {
    const [post,setPost] = useState(props.item);
    function sendFinalToDatabase() {
        const {post_id, paragraphs} = props.item;
        console.log(`sent to db: ${post_id, paragraphs}`)
    }
    return (
        <div key={props.item.post_id} id={props.item.post_id} className='single-post-max-size'>
            {/* <div key={props.item.post_id}> */}
                <div key={props.item.post_id}>{props.item.title}</div>
                <span key='tttt'>{props.item.post_created}</span>
                <div>
                <textarea defaultValue={props.item.paragraphs} />
                </div>
                <div>
                <button className='edit-button' onClick={(e) => props.editParagraph(e, props.item.post_id)}>Cancel</button>
                <button onClick={() => console.log('delete clicked')} className='warning'>Delete Post</button>
                <button onClick={props.submit}>Preview</button>
                <button type='submit' onClick={sendFinalToDatabase}>Send to DB</button>
                </div>
            </div>
        /* </div> */
    )
}

export {SinglePostFullSize};