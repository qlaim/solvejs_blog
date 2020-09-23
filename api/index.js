const express = require('express');
const { env } = require('process');
const app = express();
const port = process.env.PORT || 3030;
const posts = require('./controllers/blogPosts');
const dotenv = require('dotenv').config({
    path: '../.env'
});

app.use(express.json());

app.use('/api/posts', posts);

// get posts

app.get('/', (req, res) => {
    console.log(process.env)
    res.send('hiya, bud!!')
})
// get users

// update posts

app.put('/:post', (req, res) => {
    try {
        
    } catch (error) {
        console.error(error.message)
    }
})
// update users

// delete users

// delete posts


app.listen(port, console.log(`listening on port ${port}`))