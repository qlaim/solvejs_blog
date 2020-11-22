const express = require('express');
const loginRouter = express.Router();
const db = require('./db/dbconnect');

loginRouter.use((req, res, next) => {
    console.log('==>loginRouter<==');
    next();
}) 
// set this for check of all protected resources when complete
// return browser cookie and db to check when needed
loginRouter.post('/:email/:password', (req, res) => {
    let userDataObj = {}; 
    // remove password from obj
    console.log('about to db query...')
    const query_user_state = {
        text: 'SELECT * FROM users WHERE email = $1',
        values: [req.params.email]
    }
    const query_user_expiration = {
        text: `UPDATE users SET login_expiration = current_timestamp + (60 * interval '1 minute') WHERE id = $1 RETURNING login_expiration`,
        values: [userDataObj.id]
    }
    db.query(query_user_state, (err, results) => {
        if(err) return err;
        userDataObj = results.rows[0];
        query_user_expiration.values = [userDataObj.id]
        if(req.params.email && (req.params.password === results.rows[0].pass_hash)) {
            console.log('successful login userDataObj, now going to 2nd db call', userDataObj.id, query_user_expiration.values);
            updateExpiration();
        } else {
            res.status(400).json({"result": false})
        }
    })
    function updateExpiration() {
        db.query(query_user_expiration, (err, results) => {
            console.log('into 2nd call...')
            if(err) return err;
            userDataObj.login_expiration = results.rows[0].login_expiration;
            console.log(userDataObj)
            res.status(200).json(userDataObj);
        })
    }
})
// loginRouter.get('/', (req, res, next) => {
//     console.log('default router response...end of login line');
//     res.send('no more routes...try again')
// })

module.exports = loginRouter;