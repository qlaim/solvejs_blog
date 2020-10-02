const express = require('express');
const { dirname } = require('path');
const path = require('path');

const pool = require('./db/dbconnect');

const imgDbAddQuery = {
    text: 'INSERT INTO images (title, image) VALUES($1,$2) ',
    values: [path.resolve(__dirname, 'db/images', '$1'), path.resolve(__dirname, 'db/images', '$1')]
}

// postgresql trigger for images added to images library

pool.query(imgDbAddQuery)
.then()
.catch