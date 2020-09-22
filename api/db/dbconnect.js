const { Pool, Client } = require('pg');

const pool = new Pool({
    user: process.env.SOLVEJS_PGUSER,
    host: 'localhost',
    database = 'solvejs',
    password: process.env.POSTGRES_PASSWORD,
    port: 5432,

})