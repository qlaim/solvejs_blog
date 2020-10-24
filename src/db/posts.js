import React, {Fragment} from 'react';
import path from 'path';
import wood from "../../public/images/wood.png"
import "regenerator-runtime/runtime.js";

// let postsFromFetchFile =
// [
//     {
//         title: 'javascript how to use binary search algorithms',
//         image: wood,
//         full: false,
//         text: <Fragment><p>Sed at venenatis orci. Curabitur vel laoreet dolor, eget pharetra eros. Vivamus vitae augue urna. Mauris porttitor turpis sed fringilla molestie. Donec dolor magna, porta et sollicitudin id, laoreet eu dolor. Praesent ac semper lectus. Curabitur luctus nunc vel tortor lacinia ultricies. Maecenas ac varius enim. Nullam placerat lacus id finibus aliquet. Sed sit amet diam mauris. Duis egestas eget lacus eget lobortis.</p>

//         <p>Phasellus non tellus vel neque scelerisque bibendum. Maecenas eget sapien sed ante euismod malesuada efficitur in nunc. Sed eleifend purus nec arcu aliquam vehicula. Ut et vulputate neque, in porta nulla. Etiam at viverra orci, nec egestas mauris. Phasellus vulputate egestas libero, vitae sodales ante vulputate a. Aliquam non mi nisi. Aenean suscipit pharetra facilisis. Aliquam mollis nibh vel libero ultrices commodo. Suspendisse lectus sem, pulvinar sit amet consequat eu, rhoncus eu ante. Duis nec nibh suscipit, molestie augue a, lobortis turpis. Ut diam turpis, commodo in lobortis a, egestas nec tellus. Sed tristique sagittis lectus quis consectetur. Donec condimentum eros eu gravida maximus. Suspendisse vel sem erat.</p>
        
//         <p>Nam fringilla sit amet velit a consequat. Maecenas lorem lectus, placerat vitae lectus eget, tempus finibus mauris. Morbi ac enim eget odio molestie tincidunt. Donec vel porta odio. Maecenas at est et velit aliquet ultricies at at tortor. Nullam placerat auctor dui, eget porttitor tellus interdum vitae. Nullam faucibus dolor sed mattis hendrerit. Fusce pellentesque pharetra mi, sit amet vulputate metus sagittis non. Fusce fringilla id risus vel lobortis. Nullam ultrices arcu vel orci accumsan dictum.</p>
        
//         <p>Curabitur commodo erat at malesuada faucibus. Pellentesque egestas sodales erat sit amet iaculis. Ut nec aliquet nulla. In euismod semper nisl, vitae lobortis elit egestas nec. Phasellus eget nisi molestie, tempor justo quis, luctus elit. Nullam molestie sed leo sit amet accumsan. Cras dictum est neque, vel aliquet nisl suscipit vel. Maecenas eu lorem mi. Praesent purus purus, cursus vel volutpat scelerisque, sollicitudin quis massa. Suspendisse potenti. Donec semper dictum malesuada. Ut interdum dignissim mollis. Ut nulla est, pharetra vel facilisis facilisis, cursus eget est. In lacinia et sapien nec volutpat. Vivamus ut justo non ante dictum bibendum.</p>
//         </Fragment>
//     },
//     {
//         title: 'title test title ??',
//         image: '../../public/images/door_puzzle.webp',
//         full: false,
//         text: <Fragment><p>Nam fringilla sit amet velit a consequat. Maecenas lorem lectus, placerat vitae lectus eget, tempus finibus mauris. Morbi ac enim eget odio molestie tincidunt. Donec vel porta odio. Maecenas at est et velit aliquet ultricies at at tortor. Nullam placerat auctor dui, eget porttitor tellus interdum vitae. Nullam faucibus dolor sed mattis hendrerit. Fusce pellentesque pharetra mi, sit amet vulputate metus sagittis non. Fusce fringilla id risus vel lobortis. Nullam ultrices arcu vel orci accumsan dictum.</p>
        
//         <p>Curabitur commodo erat at malesuada faucibus. Pellentesque egestas sodales erat sit amet iaculis. Ut nec aliquet nulla. In euismod semper nisl, vitae lobortis elit egestas nec. Phasellus eget nisi molestie, tempor justo quis, luctus elit. Nullam molestie sed leo sit amet accumsan. Cras dictum est neque, vel aliquet nisl suscipit vel. Maecenas eu lorem mi. Praesent purus purus, cursus vel volutpat scelerisque, sollicitudin quis massa. Suspendisse potenti. Donec semper dictum malesuada. Ut interdum dignissim mollis. Ut nulla est, pharetra vel facilisis facilisis, cursus eget est. In lacinia et sapien nec volutpat. Vivamus ut justo non ante dictum bibendum.</p>
        
//         <p>Sed at venenatis orci. Curabitur vel laoreet dolor, eget pharetra eros. Vivamus vitae augue urna. Mauris porttitor turpis sed fringilla molestie. Donec dolor magna, porta et sollicitudin id, laoreet eu dolor. Praesent ac semper lectus. Curabitur luctus nunc vel tortor lacinia ultricies. Maecenas ac varius enim. Nullam placerat lacus id finibus aliquet. Sed sit amet diam mauris. Duis egestas eget lacus eget lobortis.</p>

//         <p>Phasellus non tellus vel neque scelerisque bibendum. Maecenas eget sapien sed ante euismod malesuada efficitur in nunc. Sed eleifend purus nec arcu aliquam vehicula. Ut et vulputate neque, in porta nulla. Etiam at viverra orci, nec egestas mauris. Phasellus vulputate egestas libero, vitae sodales ante vulputate a. Aliquam non mi nisi. Aenean suscipit pharetra facilisis. Aliquam mollis nibh vel libero ultrices commodo. Suspendisse lectus sem, pulvinar sit amet consequat eu, rhoncus eu ante. Duis nec nibh suscipit, molestie augue a, lobortis turpis. Ut diam turpis, commodo in lobortis a, egestas nec tellus. Sed tristique sagittis lectus quis consectetur. Donec condimentum eros eu gravida maximus. Suspendisse vel sem erat.</p>
//         </Fragment>
//     }
// ];

let postsFromFetchFile2 = fetch('http://localhost:3030/api/posts').then(result => result.json().then(data => {return data}));
async function getAllPosts(item) {
        let result = await fetch('http://localhost:3030/api/posts') 
        let json = await result.json();
        item = json;
        return item;
        // console.log('postsFromFetchFile2 is array??', Array.isArray(postsFromFetchFile2), 'typeof postsFromFetchFile2 is array??', typeof postsFromFetchFile2);    
    };
    getAllPosts(postsFromFetchFile2);

    console.log('==> postsFromFetchFile2 is array??', Array.isArray(postsFromFetchFile2), 'typeof postsFromFetchFile2 is array??', typeof postsFromFetchFile2);

export {postsFromFetchFile2};