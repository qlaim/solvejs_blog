const { Pool, Client } = require('pg');
const dotenv = require('dotenv').config();

const pool = new Pool({
    user: process.env.SOLVEJS_PGUSER,
    host: 'localhost',
    database: process.env.SOLVEJS_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,
})

// const client = new Client({
//     user: process.env.SOLVEJS_PGUSER,
//     host: 'localhost',
//     database: process.env.SOLVEJS_DB,
//     password: process.env.POSTGRES_PASSWORD,
//     port: 5432,
// })
pool.connect();

pool.query('SELECT name FROM users', (err, res) => {
    console.log(err, res, 'db output')
})

// client.end();