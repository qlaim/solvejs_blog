const express = require('express');
const { env } = require('process');
const app = express();
const port = process.env.PORT || 3030;
const posts = require('./controllers/blogPosts');

app.use(express.json());

app.use('/api/posts', posts);

// get posts

app.get('/', (req, res) => {
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