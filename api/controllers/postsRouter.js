const express = require('express');
const pool = require('../db/dbconnect');
const router = express.Router();
const posts = require('../db/posts');
const db = process.env.SOLVEJS_DB;

router.use((req, res, next) => {
    console.log('router use at postsRouter.js');
    next();
})

/* GET POSTS */

router.get('/:post_id', (req, res) => {
    const query_get_posts = {
        text: `SELECT title, post_id, categories, paragraphs, tbd_comments, post_created, post_updated FROM posts WHERE post_id = ${req.params.post_id}`
    }
    // console.log(process.env.SOLVEJS_PGUSER, 'process.env.user_db');
    // res.sendStatus(200).send({posts}) // move to pg db
    pool.query(`SELECT * FROM posts WHERE post_id = ${req.params.post_id}`).then(result => result.rowCount == 1 ? getQueryPost() : res.sendStatus(404)).catch(err => {console.log(err); res.send('something went wrong.')})
    function getQueryPost() {
        pool.query(query_get_posts)
        .then(result => {
            console.log(result.rows)
            // required template string due to node seeing as status code for rowcount total
            // res.send(`${result.rowCount}`)
            res.send(result.rows)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(404)
        })
    }
})


router.get('/', (req, res) => {
    const query_get_posts = {
        // refactor to account for detail not needed in *
        text: 'SELECT * FROM posts'
    }
    // console.log(process.env.SOLVEJS_PGUSER, 'process.env.user_db');
    // res.sendStatus(200).send({posts}) // move to pg db
    pool.query(query_get_posts)
    .then(result => {
        console.log(result.rows)
        // required template string due to node seeing as status code for rowcount total
        // res.send(`${result.rowCount}`)
        res.json(result.rows)
    })
    .catch(err => {
        console.log(err);
        res.sendStatus(404).send('something went wrong')
    })
})

/* CREATE POST */

// add hash check on creation to ensure no duplicate posts
// test hash

router.post('/create_post', (req, res) => {
    // check if user is admin*****
    const query_create_post = {
        text: 'INSERT INTO posts (title, categories, paragraphs, post_created) VALUES($1,$2,$3,$4) RETURNING title, post_id',
        // add: function for hash and sanitization to create text/values
        values: [ 
            '{"New Blog Post Presented As A Test!"}',
            '{"Express JS", "PostgreSQL"}',
            `{"<p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus modi tenetur <ul>
                <li>Lorin ipsum dowe ajit.</li>
                <li>Pirop dolor sit damet.</li>
                <li>Kurem ipsum dolor amt.</li>
            </ul>ad corporis deleniti quisquam esse in voluptas voluptatum earum libero illo tempore fugiat minima, saepe ullam architecto voluptatem.
        </p>
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum quae numquam tenetur <i>sunt nihil nisi dolorem at unde animi, a velit non sit enim aperiam </i> molestias totam suscipit aspernatur iusto!
        </p>
        <p>
            Lorem, ipsum <strong>sit amet consectetur adipisicing elit. Delectus, labore! Porro, </strong> necessitatibus? Iste, enim aut magnam cum adipisci obcaecati, repellendus repellat ea id vero quo sapiente natus animi, quos a!
        </p>"}`,
        '{"NOW"}'
        ]
    }
    pool.query(query_create_post)
    .then(result => {
        console.log(result.rows, 'posts result....')
        res.sendStatus(201).send(result.rows)
    })
    .catch(err => console.log(err, 'post query did not work'))
})

/* UPDATE POST */

// check if user is admin*****

/* DELETE POST */

router.delete('/delete/:post_id', (req, res) => {
    // check if user is admin*****
    // check row count > if 0, send res
    // create table for deleted posts then move deleted there
    // this will be trash with date to delete forever after 60 days
    pool.query(`SELECT FROM posts WHERE post_id = ${req.params.post_id}`).then(result => result.rowCount == 1 ? delPostQuery() : res.sendStatus(404))
    // add message 'this post does not exist' FE if 404 here
    .catch(err => console.log(err))
    function delPostQuery() {
        pool.query(`DELETE FROM posts WHERE post_id = ${req.params.post_id} RETURNING post_id, title, categories`)
        .then(result => {
            console.log(result.rows, result.rowCount)
            res.send(result.rows)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(400).send('something went wrong in this request. post has not been deleted.')
        })
    }
})


module.exports = router; // export router to be imported