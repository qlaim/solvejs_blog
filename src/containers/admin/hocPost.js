import React from 'react';

export default function hocPost(block, createPara, handleChangeParagraph) {
    return function HOCBlock(props) {
        return (
            <form action='' name='text-block'>
            <label htmlFor='paragraph'>Enter Paragraph</label><textarea cols='100%' rows='auto' name='paragraph'></textarea>
            <input type='button' onChange={(e, index) => props.handleChangeParagraph} onClick={(e) => props.createPara} value='Send: State &amp; sessionStorage' />
            </form>
        )
    } 
}