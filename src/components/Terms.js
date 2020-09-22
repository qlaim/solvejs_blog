import React from 'react';

export default function Terms() {
    return text.map(item => <p>{item.para}</p>) 
}

let text = [
    {
        para: 'This site uses cookies to keep track of user selections, serve proper ads, and website communications.  This requires your client (browser) to allow JavaScript in order to work.  If JavaScript is not allowed, this site may not function correctly.'
    },
    {
        para: 'This website may receive affiliate income from external sources when a user purchases a product from links on this page.'
    }
]