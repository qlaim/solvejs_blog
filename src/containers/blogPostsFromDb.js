import React from 'react';
import "regenerator-runtime/runtime.js";

/* FETCH DB POSTS */

async function fetchPosts() {
        let response = await fetch('http://localhost:3030/api/posts/')
        const message = await response.json();
        return message;
           //      .then(res => res.json()) 
           //      // problem i had was not letting response complete before attempting to use data
           //      .then(resp => resp)
           //      .catch(err => console.log(err, 'Something went wrong while trying to get posts.'))
                // function getPosts() { 
                //     fetch('localhost:3030/api/posts/', {
                //         method: 'GET',
                //         credentials: 'same-origin',
                //         mode: 'cors',
                //         headers: {
                //             'Content-Type': 'application/json'
                //         },       
                //         // body: JSON.stringify(res)
                //     })
                //     .then(res => console.log(res))
                //     .catch(console.log('something went wrong'))
                //     // console.log(response)
                //     // .then(res => console.log(res))
                //     // .catch(console.log('something went wrong'))
                // }
                // getPosts();
   }
//    fetchPosts().then(message => message)

const dbPostsObj = {
        getAllPosts: async function fetchPosts() {
                     let response = await fetch('http://localhost:3030/api/posts/')
                     const message = await response.json();
                     return message;
                        //      .then(res => res.json()) 
                        //      // problem i had was not letting response complete before attempting to use data
                        //      .then(resp => resp)
                        //      .catch(err => console.log(err, 'Something went wrong while trying to get posts.'))
                             // function getPosts() { 
                             //     fetch('localhost:3030/api/posts/', {
                             //         method: 'GET',
                             //         credentials: 'same-origin',
                             //         mode: 'cors',
                             //         headers: {
                             //             'Content-Type': 'application/json'
                             //         },       
                             //         // body: JSON.stringify(res)
                             //     })
                             //     .then(res => console.log(res))
                             //     .catch(console.log('something went wrong'))
                             //     // console.log(response)
                             //     // .then(res => console.log(res))
                             //     // .catch(console.log('something went wrong'))
                             // }
                             // getPosts();
                }
        ,
        getSpecificPost: function(post_id) {
                fetch(`http://localhost:3030/api/posts/:${post_id}`)
                        .then(res => res.json()) 
                        // problem i had was not letting response complete before attempting to use data
                        .then(resp => console.log(resp))
                        .catch(err => console.log(err, 'Something went wrong while trying to get posts.'))
        }
}

export default dbPostsObj;
export {fetchPosts};