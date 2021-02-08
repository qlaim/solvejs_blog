import React from 'react';

export const EditCodePrompt = () => {
    return (
        <div className='code-prompt'>
            <ul>
                <li>{'<p></p>'}</li>
                <li>{'<ul><li></li></ul>'}</li>
                <li>{'<code></code>'}</li>
                <li>{'<i></i>'}</li>
                <li>{'<strong></strong>'}</li>
                <li>{''}</li>
                <li>{''}</li>
                <li>{''}</li>
                <li>{''}</li>
                <li>{''}</li>
            </ul>
        </div>
    )
}

export function hocElement(elem, elClass) {
    let editElem = document.getElementById('new-post');
    let attr = document.createAttribute('contentEditable');
    let newElem = document.createElement(elem);
    // let newElem = `<${elem + (elClass ? className=elClass : '')}> </${elem}>`
    newElem.setAttribute('contentEditable', true);        
    return (
        <div>
        {editElem.appendChild(newElem)}

        </div>
    )
}
export function hocElementSelfClosing(elem) {
    return (
        `<${elem + elClass ? className=elClass : ''} />` 
    )
}