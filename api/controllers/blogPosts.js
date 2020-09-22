const express = require('express');
const router = express.Router();
const posts = require('../db/posts');

router.use((req, res, next) => {
    console.log('router use at blogposts.js');
    next();
})

router.get('/', (req, res, next) => {
    console.log(process.env.SOLVEJS_PGUSER, 'process.env');
    res.status(200).send({posts}) // move to pg db
})

module.exports = router; // export router to be imported