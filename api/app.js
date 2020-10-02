const express = require('express');
const { env, nextTick } = require('process');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
}); // needed path object to resolve

const {Pool, Client} = require('pg');
const app = express();
const port = process.env.PORT || 3030;
const fs = require('fs');

const postsRouter = require('./controllers/postsRouter');
const usersRouter = require('./controllers/usersRouter');

const pool = require('./db/dbconnect');

const client = pool.connect();
// const client = new Client({
//     host: 'localhost', // add env variable ||
//     user: process.env.SOLVEJS_PGUSER,
//     database: process.env.SOLVEJS_DB,
//     password: process.env.POSTGRES_PASSWORD
// });

// let result = async (req, res) => {
//     pool.query('SELECT * FROM users')
//     // .then('SELECT * FROM users;')
//     .then(res => console.log(res.rows, '<== result async res'))
//     .catch(err => console.log(err, 'err'))
//     // .then(test = await client.query('SELECT * FROM users;'))
//     // .then(console.log(test, 'client <=='))
// }

app.use(express.json());
app.use(cors());
app.use('*', (req, res, next) => {
    // function to forward trailing slash to non-trailing slash
    console.log('remember to add trailing slash function here...');
    next();
})
/* Controllers BEGIN */

app.use('/api/posts/', postsRouter);
app.use('/api/users/', usersRouter);

/* Controllers END */

/* ADD Image */

// app.post('/add/image', (req, res) => {
//     fs.  
//     const query_add_image = {
//         text: '',
//         values: ''
//     }
//     pool.query(query_add_image)
//     .then()
// })

/* Remove Image */


app.get('/', (req, res) => {
    console.log('app.get("/")')
        
    
    res.send('hiya, bud!!')
})

app.listen(port, console.log(`listening on port ${port}`))