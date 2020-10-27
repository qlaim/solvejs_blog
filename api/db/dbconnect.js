const { Pool } = require('pg');
const path = require('path');
const dotenv = require('dotenv').config({
    path: path.resolve(__dirname, '../../.env')
});
const pool = new Pool({
    user: process.env.SOLVEJS_PGUSER,
    host: process.env.HOST,
    database: process.env.SOLVEJS_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
    max: 20
})


/* 
address UUID in db: 
F.25.6.3. Security Limitations
All pgcrypto functions run inside the database server. That means that all the data and passwords move between pgcrypto and client applications in clear text. Thus you must:

Connect locally or use SSL connections.

Trust both system and database administrator. */
// client.end();
module.exports = {
    query: (text, callback) => {
        return pool.query(text, callback)
    }
};