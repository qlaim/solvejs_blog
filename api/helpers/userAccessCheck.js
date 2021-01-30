const db = require('../db/dbconnect');

// step 1: hash password from db
// step 2: pass hash to react for state
// step 3: use hash with email for userAccessCheck

module.exports = {
    userAccessCheck: function(ID, hash, callback) {
        // use to check before db updates
        // dbResult(); // start db pull
        let inside = 'nothing';
        let query_hash_pass = {
            text: 'SELECT * FROM users WHERE id = $1',
            values: [`${ID}`]
        }
        let q = async () => 
        items = await db.query(query_hash_pass, (err, results) => {
            if(err) err;
            // console.log('>>>>>', results.rows[0]);
            inside = 'inside query';
            console.log(inside, 'inside db.query');
            return results ? results.rows : 'nothing';
        });
        // let r = q();
        console.log('q().then(val => val)', 'inside');
            return q() + ' returned'
        // let sendIt = new Promise((resolve, reject) => {
        //     resolve(db.query(query_hash_pass, (err, results) => {
        //         if(err) err; 
        //         console.log('>>>>>', results.rows[0]);
        //         return results.rows;
        //     }));
        //     reject('nothing returned')
        // });
        // return sendIt.then(val => val);
    }
};