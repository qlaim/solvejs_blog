const db = require('../db/dbconnect');

// step 1: hash password from db
// step 2: pass hash to react for state
// step 3: use hash with email for userAccessCheck

module.exports = {
    userAccessCheck: async function(ID, hash) {
        // use to check before db updates
        
    let query_hash_pass = {
        text: 'SELECT * FROM users WHERE id = $1',
        values: [`${ID}`]
    }
    return await sendIt();
    async function sendIt() {
        // problem here with db call
        
        // async function accessresp() {
           return db.query(query_hash_pass, (err, results) => {
                        if(err) err;
                        return results.rows[0];
                    })
                    return insideDB;
                }
                // return accessresp()
        // return accessresp + ' << returning';
        // let endResult = await accessresp();
        // return accessresp()
    // }
    return await sendIt();
    // .catch(err => err)
    }
};