const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // use async
router.use(express.json());

const pool = require('../db/dbconnect')

/* GET USERS */

router.get('/:user_id', (req, res) => {
    let usersQuery = {
        // note: needed to remove values($1) since not inserting
        text: 'SELECT * FROM users WHERE id = $1',
        values: [`${req.params.user_id}`]
    }
        pool.query(usersQuery)
        .then(items => {
            if(items.rowCount === 0) {
                res.send('User Not Found')
            } else {
                res.send(items.rows)
            }
        })
        .catch(err => {
            console.error(err.stack);
            // needs update to only send error name only
            res.send(err.stack)
        })
    })

router.get('/', (req, res) => {
    // add db check for user is admin
    let usersQuery = 'SELECT * FROM users';
        pool.query(usersQuery)
        .then(items => res.send(items.rows))
        .catch(err => {
            console.error(err.stack);
            // needs update to only send error name only
            res.send(err.stack)
        })
})

/* CREATE USER */
// needs duplicate error check or reroute to EDIT USER

router.post('/create_user', (req, res) => {
    // will be query ? in req after connection to react
    let user_id;
    let email;
    let errObj, result;
    let regex = /\^\=[^\=]$/g
    console.log(req.body, 'role....')
    // router.post('/:email', (req, res) => {
        // add password check and ??timer?? inside db to check session
        // move bcrypt sensitive to .env
        // add timestamp for creation and last update
    let query_add_user_info = {
        text: 'INSERT INTO users (role, first_name, last_name, job_title, email, reading_history, pass_hash) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING job_title, role, first_name',
        values: [req.body.role, req.body.first_name, req.body.last_name, req.body.job_title, req.body.email, req.body.reading_history || null]
    }
    pool.query(`SELECT * FROM TABLE users WHERE email = ${req.body.email}`).then(resp => {
        resp.rowCount == 1 ? res.send(resp.email + ' already exists') : query_create_user()
    })
        .catch(err => {console.log(err); res.sendStatus(400)})

    function query_create_user() {
        pool.query(query_add_user_info)
        .then(resp => res.send(resp + `User ${req.body.first_name} ${req.body.last_name} with email ${req.body.email} successfully added`)
        )
        .catch (err => {
            console.log(err, 'errObj....')
            let ind = err.detail.indexOf('=');
            console.log(err.detail.indexOf('='), 'ind....ind....ind')
            res.send(err.detail.substr(ind+1))
        })
    }
})

/* UPDATE USER */

router.put('/edit/:user_id', (req, res) => {
    // add after working live version of blog
})

/* DELETE USER */

router.delete('/:user_id', (req, res,) => {
    let deleted_user = {
        // add filter here to delete user
        // add if user exists statement
        text: `DELETE FROM users WHERE id = '${router.param.user_id}' RETURNING id;`
    }
    pool.query(deleted_user)
    // add DB query here for name, email
    // add status codes for different issues
    .then(res => console.log(res.rows, 'router.delete...'))
    .then(res.sendStatus(204).send(`User: ${router.param.first_name} ${router.param.last_name} ${router.param.email}\nDeleted`))
    .catch(err => {
        console.error(err, 'delete error...');
        res.sendStatus(400).send('bad request. syntax error.')
    })
})

module.exports = router; // export router to be imported