import React, { useState } from 'react';

export default function SinglePost(props) {
    return (
        <div key={props.item.post_id} id={props.item.post_id} className='single-post'>
            <div key={props.item.post_id}>
                <span key={props.item.post_id}>{props.item.title}</span>
                <span key='tttt'>{props.item.post_created}</span>
                <button onClick={(e) => props.editParagraph(e)}>Edit Post</button>
                <button onClick={() => console.log('delete clicked')} className='warning'>Delete Post</button>
            </div>
        </div>
    )
}

function SinglePostFullSize(props) {
    return (
        <div key={props.item.post_id} id={props.item.post_id} className='single-post single-post-max-size'>
            <div key={props.item.post_id}>
                <span key={props.item.post_id}>{props.item.title}</span>
                <span key='tttt'>{props.item.post_created}</span>
                <button onClick={(e) => props.editParagraph(e, props.item.post_id)}>Cancel</button>
                <button onClick={() => console.log('delete clicked')} className='warning'>Delete Post</button>
            </div>
        </div>
    )
}

export {SinglePostFullSize};