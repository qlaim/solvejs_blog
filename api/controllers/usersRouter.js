const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt'); // use async
router.use(express.json());
const loginRouter = require('../loginState');

const userAccessCheck = require('../helpers/userAccessCheck').userAccessCheck;

const dbconnect = require('../db/dbconnect')

router.use((req, res, next) => {
    console.log('=>USERS<= ROUTER being used')
    next()
})

/* GET USERS */
router.get('/test', async (req, res) => {
    // will use to prevent unauth changes from admin panel
    // fix and move call to useraccesscheck.js
    let query_hash_pass = {
        text: 'SELECT * FROM users WHERE id = $1',
        values: ['d646dade-21c7-486e-a8ee-9add957230d7']
    }
    dbconnect.query(query_hash_pass, (err, results) => {
        if(err) err;
        res.send(results.rows[0])
    })
    // let items = (async function(ID, hash) {
    //     // use to check before db updates
    //     // dbResult(); // start db pull
    //     let inside = 'nothing';
    //     let query_hash_pass = {
    //         text: 'SELECT * FROM users WHERE id = $1',
    //         values: [`${ID}`]
    //     }
    //     dbconnect.query(query_hash_pass, (err, results) => {
    //         if(err) err;
    //         // console.log('>>>>>', results.rows[0]);
    //         inside = 'inside query';
    //         console.log(inside, 'inside db.query');
    //         results ? results.rows : 'nothing';
    //         });
    //         // return result + ' ... ';
    //     })()
    //     res.send(items + ' items')
            
    // let that = new Promise((resolve, reject) => {
    //     resolve(userAccessCheck('d646dade-21c7-486e-a8ee-9add957230d7'));
    //     reject('did not return')
    // });
    // userAccessCheck('d646dade-21c7-486e-a8ee-9add957230d7');
    // console.log(that, 'that');
    // let other = Promise.all()
    // res.send(that)
    /* let end = (function access() {
        userAccessCheck('d646dade-21c7-486e-a8ee-9add957230d7');
        // res.send(access3)
        // console.log(access3, 'access 3')
    })()
    function sendAccess() {
        // let test = userAccessCheck('d646dade-21c7-486e-a8ee-9add957230d7');
        // let result = await access();
        console.log(end, 'end')
        res.send(end + ' test');
    }
    sendAccess();
    console.log('end of sendAccess()'); */
})

router.get('/:email', (req, res) => {
    let usersQuery = {
        // note: needed to remove values($1) since not inserting
        text: 'SELECT * FROM users WHERE email = $1',
        values: [`${req.params.email}`]
    }
        dbconnect.query(usersQuery)
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
        dbconnect.query(usersQuery)
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
    // router.post('/:email', (req, res) => {
        // add password check and ??timer?? inside db to check session
        // move bcrypt sensitive to .env
        // add timestamp for creation and last update
    const {...body} = req.body;
    console.log(body.valueOf(), 'role....')
    let query_add_user_info = {
        text: 'INSERT INTO users (role, first_name, last_name, job_title, email, reading_history, pass_hash) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING job_title, role, first_name',
        values: [body.role, body.first_name, body.last_name, body.job_title, body.email, body.reading_history || null, body.password]
    }
    dbconnect.query(`SELECT * FROM users WHERE email = '${body.email}'`).then(resp => {
        resp.rowCount == 1 ? res.json({"response": `${resp.rows[0].email} already exists`}) : query_create_user()
    })
        .catch(err => {console.log(err); res.sendStatus(400)})

    function query_create_user() {
        dbconnect.query(query_add_user_info)
        .then(resp => res.send(resp + `User ${body.first_name} ${body.last_name} with email ${body.email} successfully added`)
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
    dbconnect.query(deleted_user)
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