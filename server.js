const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.port || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Require handlebars
// 

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'lavender',
    database: 'calendar_db'
  },
  console.log(`Connected to the calendar_db database.`)
);