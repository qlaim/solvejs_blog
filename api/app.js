const express = require('express');
const app = express();
const { env, nextTick } = require('process');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../.env')
}); // needed path object to resolve
// const multer = require('multer');
// configure | enable --> const logger = require('morgan');
const {Pool, Client} = require('pg');
const port = process.env.PORT || 3030;
const fs = require('fs');

const postsRouter = require('./controllers/postsRouter');
const usersRouter = require('./controllers/usersRouter');
const imagesRouter = require('./controllers/imagesRouter');
const loginRouter = require('./loginState');

const dbConfigs = require('./db/dbconnect').dbConfig;
const pool = new Pool(dbConfigs)

app.use((req, res, next) => {
    pool.on('error', (err, client) => {
    console.error(`Error occurred: ${err.stack}`)
    process.exit(-1)
})
next();
})
const corsOptions = {
    origin: true,
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
// app.use('*', cors());
app.use(express.json());
app.use('*', (req, res, next) => {
    // function to forward trailing slash to non-trailing slash
    console.log('remember to add trailing slash function here...');
    next();
})
/* Controllers BEGIN */

app.use('/api/posts/', postsRouter);
app.use('/api/users/', usersRouter);
app.use('/api/images/', imagesRouter);
app.use('/api/login/', loginRouter);

/* Controllers END */


app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})
module.exports = pool

app.listen(port, console.log(`listening on port ${port}`))