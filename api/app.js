const express = require('express');
const { env } = require('process');
const path = require('path');
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
}); // needed path object to resolve

const {Pool, Client} = require('pg');
const app = express();
const port = process.env.PORT || 3030;
const posts = require('./controllers/blogPosts');
const pool = require('./db/dbconnect');

const client = pool.connect();
// const client = new Client({
//     host: 'localhost', // add env variable ||
//     user: process.env.SOLVEJS_PGUSER,
//     database: process.env.SOLVEJS_DB,
//     password: process.env.POSTGRES_PASSWORD
// });
let result = async (req, res) => {
    pool.query('SELECT * FROM users')
    // .then('SELECT * FROM users;')
    .then(res => console.log(res.rows, '<== result async res'))
    .catch(err => console.log(err, 'err'))
    // .then(test = await client.query('SELECT * FROM users;'))
    // .then(console.log(test, 'client <=='))
}
console.log(result(), '<== result()')

app.use(express.json());
app.use('/api/posts', posts);

// get posts

app.get('/', (req, res) => {
    console.log('app.get("/")')
        
    
    res.send('hiya, bud!!')
})

/* CREATE USER @ DB */

app.post('/users', (req, res) => {
// will be query ? in req after connection to react
// app.param 
// app.post('/users:email', (req, res) => {
        let query_add_user = {
            text: 'INSERT INTO users (role, first_name, last_name, job_title, email, reading_history) VALUES($1,$2,$3,$4,$5,$6)',
            values: ['admin', 'michael', 'strent', 'web dev', 'another@gmail.com', '{test array}']
        }
        pool.query(query_add_user)
        .then(res => console.log(res.rows, 'query'))
        .catch (err => 
        console.error(err))
})

// client.connect();
// app.get('/test', /* async */ (err, req, res) => {
//     try {
//         console.log(pool.user);
//         // let result = await pool.query('SELECT * FROM users;');
//         // console.log(result, 'result from test query');
//     } catch (error) {
//         console.error(err.message, 'error thrown')
//     }
// })
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