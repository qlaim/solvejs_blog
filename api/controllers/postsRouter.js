const express = require('express');
const router = express.Router();
const dbconnect = require('../db/dbconnect');
const path = require('path');

router.use((req, res, next) => {
    console.log('=>POSTS<= ROUTER being used');
    next();
})

/* GET POSTS */

router.get('/:post_id', (req, res, next) => {
    const {post_id} = req.params;
    const query_get_post = {
        text: `SELECT title, post_id, categories, paragraphs, tbd_comments, post_created, post_updated FROM posts WHERE post_id = $1`,
        values: [`${post_id}`]
    }
    dbconnect.query(query_get_post, (err, results) => {
        if(err) {
            return next(err)
        }
        res.send(results.rows)
    }
    )})


router.get('/', (req, res, next) => {
    const query_get_posts = {
        // refactor to account for detail not needed in *
        text: 'SELECT * FROM posts',
        // values: [*]
    }
    // console.log(process.env.SOLVEJS_PGUSER, 'process.env.user_db');
    // res.sendStatus(200).send({posts}) // move to pg db
    dbconnect.query(query_get_posts, (err, results) => {
        if(err) {
            return next(err)
        }
        res.send(results.rows)
    },
    )
    // pool.connect((err, client, done) => {
    //     if(err) throw err;
    //     client.query(query_get_posts)
    //     .then(result => {
    //         console.log(result.rows)
    //         // required template string due to node seeing as status code for rowcount total
    //         // res.send(`${result.rowCount}`)
    //         res.json(result.rows)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.sendStatus(404).send('something went wrong')
    //     })
    // })
    })

/* CREATE POST */

// add hash check on creation to ensure no duplicate posts
// test hash

router.post('/create_post', (req, res, next) => {
    // check if user is admin*****
    const query_create_post = {
        text: 'INSERT INTO posts (title, categories, paragraphs, post_created, images) VALUES($1,$2,$3,$4,$5) RETURNING title, post_id, paragraphs, images',
        // add: function for hash and sanitization to create text/values
        values: [ 
            '"New Blog Post Presented As A Test!"',
            '{"Express JS", "PostgreSQL"}',
            `<p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus modi tenetur 
            <ul>
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
        </p>`,
        '{"NOW"}',
        `{'../../db/images/wood.png'}`
        ]
    }
    dbconnect.query(query_create_post, (err, results) => {
        if(err) {
            return next(err)
        }
            res.send(results.rows)
        // .catch(err => console.log(err, 'post query did not work'))
    })
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